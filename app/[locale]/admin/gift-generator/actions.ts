'use server'

export async function verifyAdminPassword(password: string) {
  // Ελέγχουμε αν ο κωδικός ταιριάζει με αυτόν στο .env
  // Αν δεν έχει οριστεί κωδικός στο .env, χρησιμοποιούμε ένα default για ασφάλεια (ή το κλειδώνουμε τελείως)
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  if (password === correctPassword) {
    return { success: true }
  }
  
  return { success: false }
}
