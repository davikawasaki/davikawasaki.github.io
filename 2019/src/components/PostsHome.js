import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { Link } from 'react-router-dom';
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PostCard from './shared/PostCard'
import SocialMediaParallax from './shared/SocialMediaParallax'

import moment from 'moment'
import 'moment/locale/pt.js';

const DivRoot = styled.div`
	${tw`p-2 md:p-4 lg:p-12 justify-center items-center z-50`};
	height: auto;
`

const TextParallax = styled(Parallax)`
	${tw`block text-center z-50 px-12 w-auto`}
	position: relative; margin-top: 5%;
`

const SectionTitleBlock = styled.h1`
	${tw`text-5xl`}
	color: whitesmoke;
`

const PostsWrapper = styled.div`
    ${tw`flex w-auto flex-wrap pt-8 px-8 m-4`}
    & > div:nth-child(odd) {
        margin-right: 2em;
    }
    @media (max-width: 600px) { 
		& > div:nth-child(odd) {
            margin-right: 0;
        }
	}
`

const SocialMediaSubtitleWrapper = styled.div`
    ${tw`flex justify-center items-center p-0 w-auto`}
    h3 { ${tw`p-0 font-medium`} }
    color: whitesmoke;
`

const SocialMediaWrapper = styled.div`
    ${tw`flex justify-center items-center p-0 w-auto`}
    a { padding: .5em; }
    color: whitesmoke;
`

class PostsHome extends Component {
	constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            blogSubtitle: props.subtitle,
            readMore: props.readMore,
            posts: [],
            connectors: props.connectors
        }
        moment.locale(props.lang || "en");
        this.getAllPosts("https://medium.com/feed/@davi.kawasaki")
            .then(data => this.setState({ posts: data.items.filter(item => item.categories.length > 0).slice(0,2) }))
    }

    async getAllPosts (feed) {
		const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`);
        return await res.json();
	}

	render() {
		return (
			<>
				<DivRoot>
					<TextParallax y={[0, 30]}>
						<SectionTitleBlock>{this.state.title}</SectionTitleBlock>                    
					</TextParallax>
                    <PostsWrapper>
                        {this.state.posts.map((post, i) => 
                            (
                                <PostCard
                                    key={`posts-home-${i}`}
                                    thumb={post.thumbnail}
                                    title={post.title}
                                    link={post.link}
                                    date={new moment(post.pubDate, "YYYY-MM-DD HH:mm:ss").format("LL")}
                                    description={post.description}
                                    readMore={this.state.readMore}
                                />
                            )
                        )}
                    </PostsWrapper>
                    <SocialMediaSubtitleWrapper>
                        <h3>{this.state.blogSubtitle}</h3>
                    </SocialMediaSubtitleWrapper>
                    <SocialMediaWrapper>
                        {this.state.connectors.map((smObj, i) => (
                            <SocialMediaParallax
                                key={`posts-home-social-media-connector-${i}`}
                                i={i}
                                smObj={smObj}
                                applyEffect={false}
                            />
                        ))}
                    </SocialMediaWrapper>
				</DivRoot>
			</>
		)
	}
}

export default PostsHome