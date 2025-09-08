"use client"
import React, { createContext, useContext } from 'react'
import type { Locale } from './i18n'

type Dict = Record<string, any>

const TContext = createContext<{ locale: Locale; dict: Dict }>({ locale: 'el', dict: {} })

export function TProvider({ locale, dict, children }: { locale: Locale; dict: Dict; children: React.ReactNode }) {
  return <TContext.Provider value={{ locale, dict }}>{children}</TContext.Provider>
}

export function useT() {
  const { dict } = useContext(TContext)
  function get(path: string, fallback?: string) {
    if (!dict || typeof dict !== 'object') {
      return fallback ?? path
    }
    
    const parts = path.split('.')
    let cur: any = dict
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p]
      } else {
        return fallback ?? path
      }
    }
    return typeof cur === 'string' ? cur : fallback ?? path
  }
  return get
}

export function useLocale() {
  return useContext(TContext).locale
}

