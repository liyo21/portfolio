import { ref, watch, onMounted } from 'vue';

const theme = ref<'light' | 'dark'>('light');

function applyTheme(value: 'light' | 'dark') {
  if (value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function useTheme() {
  onMounted(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      theme.value = stored
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
    }
    applyTheme(theme.value)
  })

  watch(theme, (val) => {
    localStorage.setItem('theme', val)
    applyTheme(val)
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}

