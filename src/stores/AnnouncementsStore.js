import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const useAnnouncementsStore = defineStore('announcements', () => {
  const announcements = ref([])

  const fetchAnnouncements = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'announcements'))
      announcements.value = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          date: data.date.toDate().toISOString().split('T')[0], // converte in stringa YYYY-MM-DD
        }
      })
    } catch (error) {
      console.error('Errore nel recuperare gli annunci:', error)
    }
  }

  return {
    announcements,
    fetchAnnouncements,
  }
})
