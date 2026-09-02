/**
 * Picks which closing pitch a case study gets, from the tags it already carries.
 *
 * Tags are authored in the language of the entry, so both the English and the
 * Portuguese wording of a concept map to the same variant.
 */
export type PostCtaVariant = 'delivery' | 'durability' | 'reliability';

/**
 * A tag can only belong to one variant. Concepts that appear on almost every
 * entry (self-service, GitOps, internal platform) belong to 'delivery' so that
 * the rarer signals below are the ones that actually move the pitch.
 */
const TAGS_BY_VARIANT: Record<PostCtaVariant, string[]> = {
  delivery: [
    'gitops',
    'self-service',
    'infrastructure as code',
    'infraestrutura como código',
    'internal platform',
    'plataforma interna',
    'platform engineering',
    'engenharia de plataforma',
    'developer experience',
    'experiência do desenvolvedor',
    'automation',
    'automação',
    'identity platform',
    'plataforma de identidade',
    'sso',
    'data platform',
    'plataforma de dados',
    'etl',
    'cost optimisation',
    'otimização de custos',
  ],
  durability: [
    'adr',
    'runbooks',
    'simplified technical english',
    'linguagem controlada',
    'documentation',
    'documentação',
    'developer enablement',
    'developer tooling',
    'ferramentas para desenvolvedores',
    'open source',
    'reusable pipelines',
    'pipelines reutilizáveis',
  ],
  reliability: [
    'sre',
    'reliability',
    'confiabilidade',
    'kubernetes',
    'observability platform',
    'plataforma de observabilidade',
    'opentelemetry',
    'monitoring',
    'monitoramento',
    'incident response',
    'async incident response',
    'resposta assíncrona a incidentes',
    'disaster recovery',
    'recuperação de desastres',
  ],
};

/** Breaks a tie toward the more specific claim, since 'delivery' is also the fallback. */
const TIE_BREAK: PostCtaVariant[] = ['reliability', 'durability', 'delivery'];

export function resolvePostCtaVariant(tags: string[] = []): PostCtaVariant {
  const normalized = tags.map((tag) => tag.trim().toLowerCase());

  let best: PostCtaVariant = 'delivery';
  let bestScore = 0;

  for (const variant of TIE_BREAK) {
    const score = normalized.filter((tag) => TAGS_BY_VARIANT[variant].includes(tag)).length;
    if (score > bestScore) {
      best = variant;
      bestScore = score;
    }
  }

  return best;
}
