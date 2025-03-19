import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import NavBar from '@/components/nav-bar'
import { useRouter } from "next/router"
import { navPages } from '@/utils/constants'

jest.mock("next/dist/client/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/utils/constants', () => ({
  navPages: [
    { name: 'Home', href: '/', disable: false },
    { name: 'About', href: '/about', disable: false },
    { name: 'Contact', href: '/contact', disable: true },
  ],
}));

describe('NavBar', () => {
  // I don't know how to do this QQ.
})
