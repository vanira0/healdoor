'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const LogoutButton: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        router.push('/admin/login')
        router.refresh()
      }
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="btn btn--style-secondary btn--icon-only"
      title="Log out"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        color: 'var(--theme-elevation-800)'
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    </button>
  )
}

export default LogoutButton
