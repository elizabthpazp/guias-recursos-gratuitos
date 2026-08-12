/** Datos que es seguro enviar al navegador. Nunca incluyen URLs de destino. */
export interface PublicResource {
  id: string
  name: string
  description: string
  category?: string
}

export interface PublicGuideSection {
  id: string
  title: { es: string; en: string }
  resources: PublicResource[]
}

export interface PublicGuide {
  id: string
  slug: string
  icon: string
  sections: PublicGuideSection[]
}

export interface PublicGuideSummary {
  id: string
  slug: string
  icon: string
  resourceCount: number
}
