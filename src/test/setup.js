import '@testing-library/jest-dom'

class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver = IntersectionObserverStub
