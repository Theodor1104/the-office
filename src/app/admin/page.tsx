'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Users, Crown, Shield, Check, X } from 'lucide-react'

interface Profile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  is_member: boolean
  created_at: string
}

const ADMIN_EMAIL = 'theodorhauch@gmail.com'

export default function AdminPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      if (user.email !== ADMIN_EMAIL) {
        router.push('/')
        return
      }

      setIsAdmin(true)
      fetchUsers()
    }

    checkAdmin()
  }, [router, supabase.auth])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      if (response.ok) {
        const data = await response.json()
        setProfiles(data)
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleMember = async (userId: string, currentStatus: boolean) => {
    setUpdating(userId)
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, is_member: !currentStatus }),
      })

      if (response.ok) {
        setProfiles(profiles.map(p =>
          p.id === userId ? { ...p, is_member: !currentStatus } : p
        ))
      }
    } catch (error) {
      console.error('Failed to update user:', error)
    } finally {
      setUpdating(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  const members = profiles.filter(p => p.is_member)
  const guests = profiles.filter(p => !p.is_member)

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl font-light text-primary">
              Admin <span className="font-semibold">Panel</span>
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Administrer brugere og medlemskaber
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-primary">{profiles.length}</p>
            <p className="text-gray-600">Brugere i alt</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-green-600">{members.length}</p>
            <p className="text-gray-600">Medlemmer</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-3xl font-bold text-gray-600">{guests.length}</p>
            <p className="text-gray-600">Gæster</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-primary flex items-center">
              <Users className="mr-2" size={20} />
              Alle brugere
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bruger</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {profiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {profile.full_name?.charAt(0) || profile.email.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-primary">
                            {profile.full_name || 'Ingen navn'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{profile.email}</td>
                    <td className="px-6 py-4 text-gray-600">{profile.phone || '-'}</td>
                    <td className="px-6 py-4">
                      {profile.is_member ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <Crown size={14} className="mr-1" />
                          Medlem
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          Gæst
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleMember(profile.id, profile.is_member)}
                        disabled={updating === profile.id}
                        className={`inline-flex items-center px-4 py-2 rounded text-sm font-medium transition-colors ${
                          profile.is_member
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        } disabled:opacity-50`}
                      >
                        {updating === profile.id ? (
                          'Opdaterer...'
                        ) : profile.is_member ? (
                          <>
                            <X size={14} className="mr-1" />
                            Fjern medlem
                          </>
                        ) : (
                          <>
                            <Check size={14} className="mr-1" />
                            Gør til medlem
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {profiles.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <Users size={48} className="mx-auto mb-4 opacity-50" />
              <p>Ingen brugere endnu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
