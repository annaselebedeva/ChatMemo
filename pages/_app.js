import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

import '../styles/globals.css'

// function SafeHydrate({ children }) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === 'undefined' ? null : children}
//     </div>
//   )
// }

// function MyApp({ Component, pageProps }) {
//   return <SafeHydrate><Component {...pageProps} /></SafeHydrate>
// }

// export default MyApp