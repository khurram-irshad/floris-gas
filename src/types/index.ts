export interface NavItem {
  href: string
  label: string
  isExternal?: boolean
}

export interface QuoteFormData {
  firstName: string
  email: string
  phone: string
}

export interface StatData {
  number: string
  label: string
  sublabel: string
}

// Removed unused CustomerStats interface
