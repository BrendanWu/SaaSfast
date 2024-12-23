/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RpImR1PAsTR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">MyApp</div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                prefetch={false}
              >
                Features
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to MyApp
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The best app for managing your tasks and projects.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex-1 flex items-center justify-center">

        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                  <blockquote className="text-gray-600 dark:text-gray-300">
                    "MyApp has completely transformed how I manage my projects. It's intuitive and powerful."
                  </blockquote>
                  <div className="text-sm font-semibold">
                    <p className="text-gray-900 dark:text-gray-100">Sarah Johnson</p>
                    <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                  <blockquote className="text-gray-600 dark:text-gray-300">
                    "The best task management solution I've ever used. Simple yet feature-rich."
                  </blockquote>
                  <div className="text-sm font-semibold">
                    <p className="text-gray-900 dark:text-gray-100">Michael Chen</p>
                    <p className="text-gray-500 dark:text-gray-400">Software Developer</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                  <blockquote className="text-gray-600 dark:text-gray-300">
                    "Finally found a tool that helps me stay organized and focused on what matters."
                  </blockquote>
                  <div className="text-sm font-semibold">
                    <p className="text-gray-900 dark:text-gray-100">Emily Martinez</p>
                    <p className="text-gray-500 dark:text-gray-400">Freelance Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <section className="w-full py-12 md:py-24">
          <div className="container-fluid px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Choose the perfect plan for your needs. No hidden fees.
                </p>
              </div>
              <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-white dark:bg-gray-900">
                <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-24 blur-[100px]" aria-hidden="true">
                  <div 
                    className="mx-auto aspect-[1155/678] w-[90rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40" 
                    style={{ 
                      clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                  ></div>
                </div>
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
                  <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">Choose the right plan for you</p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl/8">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                  <div className="rounded-3xl rounded-t-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-900/10 dark:ring-gray-700 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
                    <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Hobby</h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
                      <span className="text-base text-gray-500">/month</span>
                    </p>
                    <p className="mt-6 text-base/7 text-gray-600">The perfect plan if you're just getting started with our product.</p>
                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                        </svg>
                        25 products
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                        </svg>
                        Up to 10,000 subscribers
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                        </svg>
                        Advanced analytics
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                        </svg>
                        24-hour support response time
                      </li>
                    </ul>
                    <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Get started today</a>
                  </div>
                  <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-700/80 sm:p-10">
                    <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-300">Enterprise</h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
                      <span className="text-base text-gray-400">/month</span>
                    </p>
                    <p className="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Unlimited products
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Unlimited subscribers
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Advanced analytics
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Dedicated support representative
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Marketing automations
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        Custom integrations
                      </li>
                    </ul>
                    <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">
                      Get started today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </div>
    </div>
  )
}