const User = require('../models/User');


exports.api = async (req, res) => {
    return res.status(200).json([

        {
            id: 'LP1',
            label: 'Landing Page',
            content: `<div class="justify-center w-full mx-auto bg-base-100">
  <div
    x-data="{ open: false }"
    class="flex flex-col w-full mx-auto md:px-12 md:items-center md:justify-between md:flex-row px-8 py-2 lg:px-24 max-w-screen-xl relative"
  >
    <div class="flex flex-row items-center justify-between text-black">
      <a
        href="/"
        class="flex items-center w-full gap-3 font-medium sm:w-auto group 2xl:text-lg"
        ><span
          class="duration-300 group-hover:text-accent-600 group-hover:animate-pulse"
          ><img class="h-7 2xl:h-9" src="https://oxbowui.com/images/oxbow/windLogo.png" alt="#_"
        /></span>
        oxbow ui</a
      >
      <button
        class="rounded-lg md:hidden focus:outline-none focus:shadow-outline focus:text-accent-600"
        @click="open = !open"
      >
        <svg
          class="size-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            :class="{'hidden': open, 'inline-flex': !open }"
            class="inline-flex"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path
            :class="{'hidden': !open, 'inline-flex': open }"
            class="hidden"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      :class="{'flex': open, 'hidden': !open}"
      class="flex-col items-center flex-grow hidden gap-3 p-4 px-5 text-xs font-medium text-base-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0"
    >
      <a
        class="hover:text-black focus:outline-none focus:text-base-500 md:ml-auto"
        href="#_"
        >Features
      </a>
      <a
        class="hover:text-black focus:outline-none focus:text-base-500"
        href="#_"
        >About
      </a>
      <a
        class="flex items-center justify-center h-8 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 rounded-md shadow bg-accent-700 hover:to-accent-800 focus:ring-2 focus:ring-accent-950 focus:ring-offset-2 ring-offset-base-200 hover:shadow-none"
        href="#_"
        role="button"
      >
        Button
      </a>
    </nav>
  </div>
</div>
<section>
  <div class="px-8 py-12 lg:py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      <div>
        <span
          class="text-accent-600 uppercase font-mono font-medium tracking-tight text-xs"
        >
          Tagline
        </span>
        <h1
          class="text-5xl mt-8 tracking-tight font-semibold text-base-900 lg:text-balance"
        >
          Make every visitor count
        </h1>
        <p class="mt-6 text-base font-medium text-base-500">
          The fastest method for working together on staging and temporary
          environments.
        </p>
        <div class="flex flex-wrap items-center gap-2 mx-auto mt-12">
          <button
            class="flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-accent-700 hover:to-accent-800 shadow focus:ring-2 focus:ring-accent-950 focus:ring-offset-2 ring-offset-base-200 hover:shadow-none"
            aria-label="Action"
          >
            Get started
          </button>
          <button
            class="flex items-center justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
            aria-label="Action"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="lg:col-span-2">
        <img
          class="object-cover h-full border shadow rounded-2xl"
          src="https://oxbowui.com/images/dashboardLight.svg"
          alt="#_"
        />
      </div>
    </div>
    <div
      class="mx-auto grid mt-10 grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:-mx-6 lg:grid-cols-5"
    >
      <img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/1.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/2.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/3.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/4.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/5.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/6.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/7.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/9.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/8.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/10.svg"
        alt="#_"
        width="158"
        height="48"
      />
    </div>
  </div>
</section>
<section class="border-b overflow-hidden">
  <div class="relative px-8 pt-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="max-w-xl">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Tagline</span
      >
      <h1
        class="mt-4 text-4xl font-semibold tracking-tight text-base-900 sm:text-balance"
      >
        Transform your visitors into users with an engaging headline
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 sm:text-pretty">
        The fastest method for working together on staging and temporary
        environments.
      </p>
    </div>
    <div
      class="grid grid-cols-1 mt-12 gap-x-2 gap-y-14 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Innovative Design
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Our cutting-edge design offers a fresh, modern look that transforms
            your project into a standout experience.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Revolutionizing communication</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Enhancing productivity</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Powerful Functionality
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Equipped with advanced features and tools, our solution effortlessly
            manages complex tasks and workflows.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Unlocking innovative solutions</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Enabling interoperability</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Easy Integration
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Integrating with existing systems is smooth and hassle-free, thanks
            to our incredible flexible approach.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Streamlining operations</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Simplifying implementation</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full mt-12 -mb-12">
      <img
        src="https://oxbowui.com/images/dashboardLight.svg"
        alt="#_"
        class="w-full shadow rounded-t-2xl"
      />
    </div>
  </div>
</section>
<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="text-center max-w-xl mx-auto">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Tagline</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Hear from our customers about their experiences
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 lg:text-balance">
        Find out how our users are using Oxbow UI to create a customized landing
        page for their business.
      </p>
    </div>
    <ul
      role="list"
      class="mt-12 grid sm:grid-cols-2 text-center md:grid-cols-3 gap-12 lg:mt-24"
    >
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Mike Vega
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Creator of Oxbow UI.com
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              Being in the financial industry, we were always looking for ways
              to enhance our transactions&#39; security and efficiency.
            </p>
          </blockquote>
        </figure>
      </li>
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Juan Echanove
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Pay Oneeer
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              Oxbow UI is a platform that allows you to create a customized
              landing page for your business.
            </p>
          </blockquote>
        </figure>
      </li>
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Elona Muska
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Fesla
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              With Oxbow UI, we can create a customized landing page for our
              business that showcases our products and services in the best
              possible way.
            </p>
          </blockquote>
        </figure>
      </li>
    </ul>
  </div>
</section>
<section x-data="{duration: 'monthly'}">
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-screen-xl relative">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div
        class="flex flex-col gap-12 justify-between max-w-md mx-auto lg:mx-0 md:text-balance text-center lg:text-left"
      >
        <div>
          <span
            class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
            >Tagline</span
          >
          <p class="text-4xl mt-4 font-semibold tracking-tight text-base-900">
            Equip your business with world class software
          </p>
          <p class="text-base text-balance mt-4 text-base-700">
            Every plan includes every feature, and can scale as your team does.
          </p>
          <div
            class="w-full mt-8 border bg-white overflow-hidden justify-center mx-auto lg:mx-0 inline-flex p-0.5 rounded-lg max-w-xs shadow z-0"
          >
            <!-- Monthly Pricing Button: Sets 'duration' to 'monthly' when clicked -->
            <button
              id="monthly-pricing-button"
              class="block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md text-accent-900"
              @click="duration = 'monthly'"
              :class="duration == 'monthly' ? 'bg-base-100 border text-accent-900 ' : ''"
              type="button"
            >
              Monthly
            </button>
            <!-- Annual Pricing Button: Sets 'duration' to 'annual' when clicked -->
            <button
              id="annual-pricing-button"
              class="block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md text-accent-900"
              @click="duration = 'annual'"
              :class="duration == 'annual' ? 'bg-base-100 border text-accent-900 ' : ''"
              type="button"
            >
              Annual
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col h-full justify-between p-8 bg-accent-700 rounded-3xl"
      >
        <div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2 justify-between">
              <p class="text-xl font-medium text-white">Basic</p>
              <p
                class="font-semibold flex items-baseline text-2xl tracking-tighter font-mono text-white"
              >
                <span
                  data-monthly="$49"
                  data-annual="$39"
                  x-text="$el.dataset[duration]"
                ></span>
                <span class="text-sm font-normal tracking-normal text-base-200">
                  <span x-show="duration === 'monthly'">
                    <span x-show="duration === 'monthly'"> /month</span></span
                  >
                  <span x-show="duration === 'annual'" style="display: none">
                    /annually</span
                  >
                </span>
              </p>
            </div>
            <ul
              class="grid grid-cols-1 sm:grid-cols-2 l mt-10 text-sm text-white gap-y-3"
              role="list"
            >
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Unlimited members</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>2 teams </span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>50 issues (+unlimited)</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Slack, GitHub, and API access</span>
              </li>
            </ul>
          </div>
          <div class="w-full mt-8">
            <a
              aria-describedby="#_"
              class="flex items-center justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-white border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none w-full"
              href="#_"
              >Get started</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div>
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >faq</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Frequently Asked Questions
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Everything you need to know about our platform.
      </p>
    </div>
    <dl class="space-y-8 divide-y divide-base-900/10 mt-12">
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          How does end-to-end encryption work?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            End-to-end encryption ensures that only the sender and recipient can
            access the content of a message.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Can I access my encrypted data if I forget my encryption key?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            No, forgetting or losing your encryption key means that your
            encrypted data cannot be accessed.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Are there any limitations to the self-destructing messages feature?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Self-destructing messages are designed to automatically delete
            themselves after a specific period or upon being read by the
            recipient.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          What happens if I enable two-factor authentication and lose my device?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Losing your device doesn&#39;t automatically compromise your
            account&#39;s security.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Is my personal information shared or sold to third parties?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            No, we strictly adhere to a privacy-centric approach. Your personal
            information is never shared, sold, or monetized. We prioritize your
            privacy and ensure that your data remains confidential and only
            accessible to you.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Can I use this platform on multiple devices?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Yes, you can access our platform on multiple devices. Your encrypted
            data remains synced across all devices, allowing you to seamlessly
            communicate and access your files and messages from anywhere.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Are there any storage limitations for files and documents?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Our platform provides ample storage space for your files and
            documents. However, there may be storage limitations based on the
            pricing plan you choose. We offer flexible plans to suit your needs
            and provide options to upgrade if you require additional storage
            capacity.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Is it possible to export my data from the platform?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Yes, you can export your data from the platform. We offer export
            features that allow you to download your messages, files, and
            documents, ensuring you have a local copy for backup or migration
            purposes. It provides you with greater control and flexibility over
            your data.
          </p>
        </dd>
      </div>
      <!-- More questions... -->
    </dl>
  </div>
</section>
<section>
  <div class="px-8 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xl font-semibold tracking-tight text-base-900">
          Get started with our app today
        </p>
        <p class="mt-4 text-sm text-base-500 lg:text-base">
          Streamline your workflow and collaborate seamlessly on staging and
          temporary environments
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
        <button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 md:justify-center shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9998 14.5L21.1998 10L4.8998 1.2C4.7998 1.1 4.5998 1.1 4.2998 1L16.9998 14.5Z"
              fill="#00F076"
            ></path>
            <path
              d="M22.9998 21L28.8998 17.8C29.5998 17.4 29.9998 16.8 29.9998 16C29.9998 15.2 29.5998 14.5 28.8998 14.2L22.9998 11L18.2998 16L22.9998 21Z"
              fill="#FFC900"
            ></path>
            <path
              d="M2.4 1.8999C2.1 2.1999 2 2.5999 2 2.9999V28.9999C2 29.3999 2.1 29.7999 2.4 30.1999L15.6 15.9999L2.4 1.8999Z"
              fill="#00D6FF"
            ></path>
            <path
              d="M16.9998 17.5L4.2998 31C4.4998 31 4.6998 30.9 4.8998 30.8L21.1998 22L16.9998 17.5Z"
              fill="#FF3A44"
            ></path>
          </svg>
          <span class="text-xs text-base-600"
            >Download on Google Play</span
          ></button
        ><button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 61 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.0332 39.3793C51.0696 36.549 51.8214 33.7739 53.2186 31.3122C54.6157 28.8506 56.6129 26.7823 59.0241 25.2999C57.4923 23.1122 55.4715 21.3118 53.1222 20.0417C50.7728 18.7716 48.1597 18.0668 45.4904 17.9833C39.7961 17.3856 34.2759 21.3906 31.3741 21.3906C28.4163 21.3906 23.9488 18.0427 19.1379 18.1416C16.0261 18.2422 12.9935 19.147 10.3354 20.7681C7.6773 22.3892 5.48446 24.6711 3.97052 27.3917C-2.5874 38.7459 2.30423 55.433 8.58628 64.611C11.7293 69.1052 15.4027 74.1253 20.2092 73.9473C24.9126 73.7522 26.6693 70.948 32.3467 70.948C37.9715 70.948 39.6195 73.9473 44.5236 73.8341C49.5706 73.7522 52.7504 69.3199 55.7833 64.7832C58.0416 61.5809 59.7793 58.0417 60.9322 54.2966C58 53.0565 55.4977 50.9806 53.7374 48.3279C51.9771 45.6751 51.0366 42.5629 51.0332 39.3793Z"
              fill="black"
            ></path>
            <path
              d="M41.7704 11.9472C44.5223 8.64377 45.878 4.39769 45.5498 0.110733C41.3456 0.5523 37.4621 2.56163 34.673 5.73837C33.3094 7.29028 32.265 9.09575 31.5995 11.0515C30.9341 13.0073 30.6606 15.0751 30.7948 17.1367C32.8976 17.1583 34.978 16.7025 36.8791 15.8036C38.7803 14.9047 40.4527 13.5862 41.7704 11.9472V11.9472Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="text-xs text-base-600">Download on App Store</span>
        </button>
      </div>
    </div>
    <div
      class="grid pt-6 mt-6 border-t grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24"
    >
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-0">
          <h3 id="footer-heading-0" class="text-sm font-medium text-base-900">
            Company
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Leadership Team
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-1">
          <h3 id="footer-heading-1" class="text-sm font-medium text-base-900">
            Services
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Commerce
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Insights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-2">
          <h3 id="footer-heading-2" class="text-sm font-medium text-base-900">
            Resources
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Webinars
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                White Papers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-3">
          <h3 id="footer-heading-3" class="text-sm font-medium text-base-900">
            Support &amp; Legal
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                API Status
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Live Chat
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Email Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="pt-6 mt-12 border-t flex flex-col md:flex-row items-center justify-between"
    >
      <a
        href="#_"
        class="font-medium w-full sm:w-auto group flex gap-3 items-center group-hover:text-accent-600 duration-300 group-hover:animate-pulse"
        ><img
          class="h-7 2xl:h-12"
          src="https://oxbowui.com/images/oxbow/blueLineLogo.png"
          alt="#_"
        />
        Oxbow UI</a
      >
      <p class="border-base-700 text-base-400 text-sm">
        Copyright © 2024 Oxbow UI. All rights reserved.
      </p>
    </div>
  </div>
</section>
`, media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791965/qrmaqvlhkzrcu5ykinhc.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Landing Page'
        }, {
            id: 'PP2',
            label: 'Pricing Page',
            content: `<div class="justify-center w-full mx-auto bg-base-100">
  <div
    x-data="{ open: false }"
    class="flex flex-col w-full mx-auto md:px-12 md:items-center md:justify-between md:flex-row px-8 py-2 lg:px-24 max-w-screen-xl relative"
  >
    <div class="flex flex-row items-center justify-between text-black">
      <a
        href="/"
        class="flex items-center w-full gap-3 font-medium sm:w-auto group 2xl:text-lg"
        ><span
          class="duration-300 group-hover:text-accent-600 group-hover:animate-pulse"
          ><img class="h-7 2xl:h-9" src="https://oxbowui.com/images/oxbow/windLogo.png" alt="#_"
        /></span>
        oxbow ui</a
      >
      <button
        class="rounded-lg md:hidden focus:outline-none focus:shadow-outline focus:text-accent-600"
        @click="open = !open"
      >
        <svg
          class="size-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            :class="{'hidden': open, 'inline-flex': !open }"
            class="inline-flex"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path
            :class="{'hidden': !open, 'inline-flex': open }"
            class="hidden"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      :class="{'flex': open, 'hidden': !open}"
      class="flex-col items-center flex-grow hidden gap-3 p-4 px-5 text-xs font-medium text-base-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0"
    >
      <a
        class="hover:text-black focus:outline-none focus:text-base-500 md:ml-auto"
        href="#_"
        >Features
      </a>
      <a
        class="hover:text-black focus:outline-none focus:text-base-500"
        href="#_"
        >About
      </a>
      <a
        class="flex items-center justify-center h-8 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 rounded-md shadow bg-accent-700 hover:to-accent-800 focus:ring-2 focus:ring-accent-950 focus:ring-offset-2 ring-offset-base-200 hover:shadow-none"
        href="#_"
        role="button"
      >
        Button
      </a>
    </nav>
  </div>
</div>
<section x-data="{duration: 'monthly'}">
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-screen-xl relative">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
      <div
        class="flex flex-col gap-12 justify-between max-w-md mx-auto lg:mx-0 md:text-balance text-center lg:text-left"
      >
        <div>
          <span
            class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
            >Tagline</span
          >
          <p class="text-4xl mt-4 font-semibold tracking-tight text-base-900">
            Equip your business with world class software
          </p>
          <p class="text-base text-balance mt-4 text-base-700">
            Every plan includes every feature, and can scale as your team does.
          </p>
          <div
            class="w-full mt-8 border bg-white overflow-hidden justify-center mx-auto lg:mx-0 inline-flex p-0.5 rounded-lg max-w-xs shadow z-0"
          >
            <!-- Monthly Pricing Button: Sets 'duration' to 'monthly' when clicked -->
            <button
              id="monthly-pricing-button"
              class="block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md text-accent-900"
              @click="duration = 'monthly'"
              :class="duration == 'monthly' ? 'bg-base-100 border text-accent-900 ' : ''"
              type="button"
            >
              Monthly
            </button>
            <!-- Annual Pricing Button: Sets 'duration' to 'annual' when clicked -->
            <button
              id="annual-pricing-button"
              class="block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-md text-accent-900"
              @click="duration = 'annual'"
              :class="duration == 'annual' ? 'bg-base-100 border text-accent-900 ' : ''"
              type="button"
            >
              Annual
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col h-full justify-between p-8 bg-accent-700 rounded-3xl"
      >
        <div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2 justify-between">
              <p class="text-xl font-medium text-white">Basic</p>
              <p
                class="font-semibold flex items-baseline text-2xl tracking-tighter font-mono text-white"
              >
                <span
                  data-monthly="$49"
                  data-annual="$39"
                  x-text="$el.dataset[duration]"
                ></span>
                <span class="text-sm font-normal tracking-normal text-base-200">
                  <span x-show="duration === 'monthly'">
                    <span x-show="duration === 'monthly'"> /month</span></span
                  >
                  <span x-show="duration === 'annual'" style="display: none">
                    /annually</span
                  >
                </span>
              </p>
            </div>
            <ul
              class="grid grid-cols-1 sm:grid-cols-2 l mt-10 text-sm text-white gap-y-3"
              role="list"
            >
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Unlimited members</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>2 teams </span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>50 issues (+unlimited)</span>
              </li>
              <li class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 icon icon-tabler icon-tabler-circle-check-filled text-white"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Slack, GitHub, and API access</span>
              </li>
            </ul>
          </div>
          <div class="w-full mt-8">
            <a
              aria-describedby="#_"
              class="flex items-center justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-white border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none w-full"
              href="#_"
              >Get started</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div>
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >faq</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Frequently Asked Questions
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Everything you need to know about our platform.
      </p>
    </div>
    <div class="mt-12">
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          How does end-to-end encryption work?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          End-to-end encryption ensures that only the sender and recipient can
          access the content of a message.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Can I access my encrypted data if I forget my encryption key?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          No, forgetting or losing your encryption key means that your encrypted
          data cannot be accessed.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Are there any limitations to the self-destructing messages feature?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          Self-destructing messages are designed to automatically delete
          themselves after a specific period or upon being read by the
          recipient.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          What happens if I enable two-factor authentication and lose my device?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          Losing your device doesn&#39;t automatically compromise your
          account&#39;s security.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Is my personal information shared or sold to third parties?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          No, we strictly adhere to a privacy-centric approach. Your personal
          information is never shared, sold, or monetized. We prioritize your
          privacy and ensure that your data remains confidential and only
          accessible to you.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Can I use this platform on multiple devices?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          Yes, you can access our platform on multiple devices. Your encrypted
          data remains synced across all devices, allowing you to seamlessly
          communicate and access your files and messages from anywhere.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Are there any storage limitations for files and documents?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          Our platform provides ample storage space for your files and
          documents. However, there may be storage limitations based on the
          pricing plan you choose. We offer flexible plans to suit your needs
          and provide options to upgrade if you require additional storage
          capacity.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
      <details class="group cursor-pointer">
        <summary
          class="flex items-center justify-between w-full pt-4 pb-1 text-left select-none tracking-tight text-base font-medium text-base-900 hover:text-accent-500 focus:text-accent-500"
        >
          Is it possible to export my data from the platform?
          <svg
            class="size-5 duration-300 ease-out transform group-open:-rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            ></path>
          </svg>
        </summary>
        <div class="py-4 pt-2 pb-8 text-sm text-base-500">
          Yes, you can export your data from the platform. We offer export
          features that allow you to download your messages, files, and
          documents, ensuring you have a local copy for backup or migration
          purposes. It provides you with greater control and flexibility over
          your data.
          <div class="flex mt-8">
            <button
              class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-sm"
              aria-label="Action"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
      </details>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 pt-12 border-t items-end"
    >
      <div class="lg:col-span-2">
        <img class="h-12" src="https://oxbowui.com/images/oxbow/blueLineLogo.png" alt="#_" />
        <h1 class="text-4xl mt-4 font-semibold tracking-tight text-base-900">
          Got questions?
        </h1>
        <p class="mt-6 text-base font-medium text-base-500 lg:text-balance">
          We're here to help you with any questions you might have.
        </p>
      </div>
      <div class="flex lg:ml-auto">
        <button
          class="text-accent-600 flex items-center gap-3 hover:text-base-900 transition-all duration-200 text-base"
          aria-label="Action"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="px-8 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xl font-semibold tracking-tight text-base-900">
          Get started with our app today
        </p>
        <p class="mt-4 text-sm text-base-500 lg:text-base">
          Streamline your workflow and collaborate seamlessly on staging and
          temporary environments
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
        <button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 md:justify-center shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9998 14.5L21.1998 10L4.8998 1.2C4.7998 1.1 4.5998 1.1 4.2998 1L16.9998 14.5Z"
              fill="#00F076"
            ></path>
            <path
              d="M22.9998 21L28.8998 17.8C29.5998 17.4 29.9998 16.8 29.9998 16C29.9998 15.2 29.5998 14.5 28.8998 14.2L22.9998 11L18.2998 16L22.9998 21Z"
              fill="#FFC900"
            ></path>
            <path
              d="M2.4 1.8999C2.1 2.1999 2 2.5999 2 2.9999V28.9999C2 29.3999 2.1 29.7999 2.4 30.1999L15.6 15.9999L2.4 1.8999Z"
              fill="#00D6FF"
            ></path>
            <path
              d="M16.9998 17.5L4.2998 31C4.4998 31 4.6998 30.9 4.8998 30.8L21.1998 22L16.9998 17.5Z"
              fill="#FF3A44"
            ></path>
          </svg>
          <span class="text-xs text-base-600"
            >Download on Google Play</span
          ></button
        ><button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 61 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.0332 39.3793C51.0696 36.549 51.8214 33.7739 53.2186 31.3122C54.6157 28.8506 56.6129 26.7823 59.0241 25.2999C57.4923 23.1122 55.4715 21.3118 53.1222 20.0417C50.7728 18.7716 48.1597 18.0668 45.4904 17.9833C39.7961 17.3856 34.2759 21.3906 31.3741 21.3906C28.4163 21.3906 23.9488 18.0427 19.1379 18.1416C16.0261 18.2422 12.9935 19.147 10.3354 20.7681C7.6773 22.3892 5.48446 24.6711 3.97052 27.3917C-2.5874 38.7459 2.30423 55.433 8.58628 64.611C11.7293 69.1052 15.4027 74.1253 20.2092 73.9473C24.9126 73.7522 26.6693 70.948 32.3467 70.948C37.9715 70.948 39.6195 73.9473 44.5236 73.8341C49.5706 73.7522 52.7504 69.3199 55.7833 64.7832C58.0416 61.5809 59.7793 58.0417 60.9322 54.2966C58 53.0565 55.4977 50.9806 53.7374 48.3279C51.9771 45.6751 51.0366 42.5629 51.0332 39.3793Z"
              fill="black"
            ></path>
            <path
              d="M41.7704 11.9472C44.5223 8.64377 45.878 4.39769 45.5498 0.110733C41.3456 0.5523 37.4621 2.56163 34.673 5.73837C33.3094 7.29028 32.265 9.09575 31.5995 11.0515C30.9341 13.0073 30.6606 15.0751 30.7948 17.1367C32.8976 17.1583 34.978 16.7025 36.8791 15.8036C38.7803 14.9047 40.4527 13.5862 41.7704 11.9472V11.9472Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="text-xs text-base-600">Download on App Store</span>
        </button>
      </div>
    </div>
    <div
      class="grid pt-6 mt-6 border-t grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24"
    >
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-0">
          <h3 id="footer-heading-0" class="text-sm font-medium text-base-900">
            Company
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Leadership Team
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-1">
          <h3 id="footer-heading-1" class="text-sm font-medium text-base-900">
            Services
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Commerce
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Insights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-2">
          <h3 id="footer-heading-2" class="text-sm font-medium text-base-900">
            Resources
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Webinars
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                White Papers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-3">
          <h3 id="footer-heading-3" class="text-sm font-medium text-base-900">
            Support &amp; Legal
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                API Status
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Live Chat
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Email Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="pt-6 mt-12 border-t flex flex-col md:flex-row items-center justify-between"
    >
      <a
        href="#_"
        class="font-medium w-full sm:w-auto group flex gap-3 items-center group-hover:text-accent-600 duration-300 group-hover:animate-pulse"
        ><img
          class="h-7 2xl:h-12"
          src="https://oxbowui.com/images/oxbow/blueLineLogo.png"
          alt="#_"
        />
        Oxbow UI</a
      >
      <p class="border-base-700 text-base-400 text-sm">
        Copyright © 2024 Oxbow UI. All rights reserved.
      </p>
    </div>
  </div>
</section>
`,media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791831/ecxmjalpjghe1xt94zb1.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Pricing Page'
        },
        {
            id: 'HS1',
            label: 'Hero Section',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      <div>
        <span
          class="text-accent-600 uppercase font-mono font-medium tracking-tight text-xs"
        >
          Tagline
        </span>
        <h1 class="text-5xl font-semibold tracking-tight text-base-900 mt-8">
          Make every visitor count
        </h1>
        <p class="mt-4 text-base font-medium text-base-500">
          The fastest method for working together on staging and temporary
          environments.
        </p>
        <div class="flex flex-wrap items-center gap-2 mx-auto mt-8">
          <button
            class="flex items-center justify-center transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 ring-accent-700 focus:ring-accent-700 focus:ring-offset-white h-9 px-4 py-2 text-sm font-medium rounded-md"
          >
            Get started
          </button>
          <button
            class="flex items-center justify-center transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-100 focus:ring-accent-500 focus:ring-offset-white h-9 px-4 py-2 text-sm font-medium rounded-md"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="lg:col-span-2">
        <img
          class="object-cover h-full border shadow rounded-2xl"
          src="https://oxbowui.com/images/dashboardLight.svg"
          alt="#_"
        />
      </div>
    </div>
    <div
      class="mx-auto grid mt-10 grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:-mx-6 lg:grid-cols-5"
    >
      <img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/1.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/2.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/3.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/4.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/5.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/6.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/7.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/9.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/8.svg"
        alt="#_"
        width="158"
        height="48"
      /><img
        class="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain"
        src="https://oxbowui.com/brands/10.svg"
        alt="#_"
        width="158"
        height="48"
      />
    </div>
  </div>
</section>
`,media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727789911/dfw4ombecpnvqvdlq907.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Hero Section'
        }

        , {
            id: 'FS1',
            label: 'Features Section',
            content: `<section>
  <div class="relative px-8 pt-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="max-w-xl">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Tagline</span
      >
      <h1
        class="mt-4 text-4xl font-semibold tracking-tight text-base-900 sm:text-balance"
      >
        Transform your visitors into users with an engaging headline
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 sm:text-pretty">
        The fastest method for working together on staging and temporary
        environments.
      </p>
    </div>
    <div
      class="grid grid-cols-1 mt-12 gap-x-2 gap-y-14 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Innovative Design
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Our cutting-edge design offers a fresh, modern look that transforms
            your project into a standout experience.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Revolutionizing communication</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Enhancing productivity</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Powerful Functionality
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Equipped with advanced features and tools, our solution effortlessly
            manages complex tasks and workflows.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Unlocking innovative solutions</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Enabling interoperability</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p class="text-lg font-medium tracking-tight text-base-900">
            Easy Integration
          </p>
          <p class="mt-2 text-sm text-base-500 text-pretty">
            Integrating with existing systems is smooth and hassle-free, thanks
            to our incredible flexible approach.
          </p>
        </div>
        <ul
          role="list"
          class="mt-6 space-y-1 text-base font-medium list-none text-base-900"
        >
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Streamlining operations</span
              >
            </div>
          </li>
          <li class="list-none">
            <div class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-accent-600 icon icon-tabler icon-tabler-circle-check-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  stroke-width="0"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-base text-base-700"
                >Simplifying implementation</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full mt-12 -mb-12">
      <img
        src="https://oxbowui.com/images/dashboardLight.svg"
        alt="#_"
        class="w-full shadow rounded-t-2xl"
      />
    </div>
  </div>
</section>
`,media: '<img src=" https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790088/w2fdoh4rvapvlcma1rje.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Feature Section'
        },
        {
            id: 'TS1',
            label: 'Timeline Section',
            content:   `<section>
  <div class="relative px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="max-w-xl mx-auto text-center lg:text-balance">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
      >
        Milestones
      </span>
      <h1
        class="mt-4 text-4xl font-semibold tracking-tight text-base-900 sm:text-balance"
      >
        Key updates & releases
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Explore the evolution of our product, from the initial launch to the
        latest enhancements.
      </p>
    </div>
    <div class="flex flex-col grid-cols-9 mx-auto mt-12 md:grid">
      <!-- left -->
      <div class="flex flex-row-reverse md:contents">
        <div class="col-start-1 col-end-5 my-4 ml-auto">
          <div class="relative size-full p-4 bg-base-50 lg:p-8 rounded-xl">
            <span
              class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
              ><time datetime="01.08.2024">01.08.2024</time></span
            >
            <h4 class="mt-8 text-2xl font-medium tracking-tight text-base-900">
              The dawn of version 3.0.0
            </h4>
            <p class="mt-4 text-base text-base-500">
              Welcome to the future with Version 3.0.0! This monumental update
              unveils a completely revamped interface, groundbreaking AI-powered
              tools, and seamless integration with your favorite apps. Get ready
              to explore uncharted territories in productivity!
            </p>
            <div class="mt-8">
              <a
                class="relative flex items-center gap-2 text-sm font-medium text-accent-500 duration-300 hover:text-base-900"
                href="#_"
              >
                Read further
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div class="flex items-center justify-center w-3 h-full">
            <div
              class="h-full w-[0.05rem] bg-base-200 pointer-events-none"
            ></div>
          </div>
          <div
            class="absolute w-3 h-3 -mt-3 bg-white border-2 border-accent-500 rounded-full top-1/2"
          ></div>
        </div>
      </div>
      <!-- right -->
      <div class="flex md:contents">
        <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div class="flex items-center justify-center w-3 h-full">
            <div
              class="h-full w-[0.05rem] bg-base-200 pointer-events-none"
            ></div>
          </div>
          <div
            class="absolute w-3 h-3 -mt-3 bg-white border-2 border-accent-500 rounded-full top-1/2"
          ></div>
        </div>
        <div class="col-start-6 col-end-10 my-4 mr-auto">
          <div class="relative size-full p-4 bg-base-50 lg:p-8 rounded-xl">
            <span
              class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
              ><time datetime="02.13.2024">02.13.2024</time></span
            >
            <h4 class="mt-8 text-2xl font-medium tracking-tight text-base-900">
              Version 3.1.0: the cosmic leap
            </h4>
            <p class="mt-4 text-base text-base-500">
              Version 3.1.0 propels you into the cosmos with faster processing
              speeds, enhanced customization options, and new cosmic-themed
              visual elements. Experience the power of the stars at your
              fingertips.
            </p>
            <div class="mt-8">
              <a
                class="relative flex items-center gap-2 text-sm font-medium text-accent-500 duration-300 hover:text-base-900"
                href="#_"
              >
                Read further
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790217/jgzsygujbly8jat3rlzm.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Timeline Section'
        },
        {
            id: 'SS2',
            label: 'Steps Section',
            content: `<section>
  <div class="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-end">
      <div class="lg:col-span-2">
        <span
          class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
          >Process</span
        >
        <h1
          class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
        >
          Simple steps to achieve your goals
        </h1>
      </div>
      <p class="text-base font-medium mt-4 text-base-500">
        Follow these straightforward steps to streamline your process and
        achieve success with ease.
      </p>
    </div>
    <dl class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 mt-12">
      <div class="bg-base-50 rounded-3xl">
        <dt class="tracking-tight text-lg font-medium text-base-900 p-8">
          1. Choose your account type
        </dt>
        <dd class="text-sm text-base-500 text-pretty p-8 border-t">
          Decide whether you need a checking account, savings account, or both.
          Each type has its own benefits and features.
        </dd>
      </div>
      <div class="bg-accent-600 rounded-3xl">
        <dt class="tracking-tight text-lg font-medium text-white p-8">
          2. Gather required documents
        </dt>
        <dd
          class="text-sm lg:text-balance text-base-200 p-8 border-t border-white/20"
        >
          Collect necessary documents such as ID, proof of address, and Social
          Security number. This ensures a smooth application process.
        </dd>
      </div>
      <div class="bg-accent-950 rounded-3xl">
        <dt class="tracking-tight text-lg font-medium text-white p-8">
          3. Complete the application
        </dt>
        <dd
          class="text-sm lg:text-balance text-base-200 p-8 border-t border-white/20"
        >
          Fill out the application form online or at your local branch. Provide
          accurate information to avoid delays.
        </dd>
      </div>
    </dl>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790336/av2ko2l9vivpsed3cydl.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Steps Section'
        },
        {
            id: 'PCS1',
            label: 'Pricing Section',
            content: `<section x-data="{duration: 'monthly'}">
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-screen-xl relative">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto">
      <!-- Tier 1 -->
      <div
        class="flex flex-col h-full justify-between p-1 bg-base-50 rounded-3xl shadow"
      >
        <div>
          <div class="flex flex-col p-8 bg-white shadow rounded-[1.3rem]">
            <span class="text-xl text-base-900"> Core </span>
            <p class="text-sm text-base-500 mt-2">
              This subscription tier caters to individuals and hobbyists seeking
              fundamental features.
            </p>
          </div>
          <div class="p-8 pt-0 mt-8">
            <p
              class="font-semibold lg:text-3xl flex items-baseline text-2xl tracking-tighter text-base-900"
            >
              $19.00
              <span
                class="text-sm font-normal tracking-normal font-sans text-base-500"
              >
                /month
              </span>
            </p>
            <div class="w-full mt-4">
              <button
                class="flex items-center justify-center transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-100 focus:ring-accent-500 focus:ring-offset-white h-9 px-4 py-2 text-sm font-medium rounded-md w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Tier 2 -->
      <div
        class="flex h-full justify-between flex-col p-1 rounded-3xl bg-base-900 shadow"
      >
        <div>
          <div class="flex flex-col p-8 bg-base-800 shadow rounded-[1.3rem]">
            <span class="text-xl text-white"> Momentum </span>
            <p class="text-sm text-base-300 mt-2">
              Designed with medium-sized businesses in mind, this subscription
              tier provides advanced tools.
            </p>
          </div>
          <div class="p-8 pt-0 mt-8">
            <p
              class="font-semibold flex lg:text-3xl items-baseline text-2xl tracking-tighter text-white"
            >
              $49.00
              <span
                class="text-sm font-normal tracking-normal font-sans text-base-300"
              >
                /month
              </span>
            </p>
            <div class="w-full mt-4">
              <button
                class="flex items-center justify-center transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 ring-accent-700 focus:ring-accent-700 focus:ring-offset-white h-9 px-4 py-2 text-sm font-medium rounded-md w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Tier 3 -->
      <div
        class="flex flex-col h-full justify-between p-1 bg-base-50 rounded-3xl shadow"
      >
        <div>
          <div class="flex flex-col p-8 bg-white shadow rounded-[1.3rem]">
            <span class="text-xl text-base-900"> Growth </span>
            <p class="text-sm text-base-500 mt-2">
              Designed for expanding businesses, this tier provides essential
              tools to scale operations efficiently.
            </p>
          </div>
          <div class="p-8 pt-0 mt-8">
            <p
              class="font-semibold lg:text-3xl flex items-baseline text-2xl tracking-tighter text-base-900"
            >
              $99.00
              <span
                class="text-sm font-normal tracking-normal font-sans text-base-500"
              >
                /month
              </span>
            </p>
            <div class="w-full mt-4">
              <button
                class="flex items-center justify-center transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-100 focus:ring-accent-500 focus:ring-offset-white h-9 px-4 py-2 text-sm font-medium rounded-md w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790429/za4avrgn1p71ywsvy3fu.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Pricing Section'
        },
        {
            id: 'FAQS1',
            label: 'Faq Section',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div>
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >faq</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Frequently Asked Questions
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Everything you need to know about our platform.
      </p>
    </div>
    <dl class="space-y-8 divide-y divide-base-900/10 mt-12">
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          How does end-to-end encryption work?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            End-to-end encryption ensures that only the sender and recipient can
            access the content of a message.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Can I access my encrypted data if I forget my encryption key?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            No, forgetting or losing your encryption key means that your
            encrypted data cannot be accessed.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Are there any limitations to the self-destructing messages feature?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Self-destructing messages are designed to automatically delete
            themselves after a specific period or upon being read by the
            recipient.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          What happens if I enable two-factor authentication and lose my device?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Losing your device doesn&#39;t automatically compromise your
            account&#39;s security.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Is my personal information shared or sold to third parties?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            No, we strictly adhere to a privacy-centric approach. Your personal
            information is never shared, sold, or monetized. We prioritize your
            privacy and ensure that your data remains confidential and only
            accessible to you.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Can I use this platform on multiple devices?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Yes, you can access our platform on multiple devices. Your encrypted
            data remains synced across all devices, allowing you to seamlessly
            communicate and access your files and messages from anywhere.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Are there any storage limitations for files and documents?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Our platform provides ample storage space for your files and
            documents. However, there may be storage limitations based on the
            pricing plan you choose. We offer flexible plans to suit your needs
            and provide options to upgrade if you require additional storage
            capacity.
          </p>
        </dd>
      </div>
      <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <dt
          class="tracking-tight text-lg font-medium text-base-900 lg:col-span-5"
        >
          Is it possible to export my data from the platform?
        </dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="ttext-sm text-base-500">
            Yes, you can export your data from the platform. We offer export
            features that allow you to download your messages, files, and
            documents, ensuring you have a local copy for backup or migration
            purposes. It provides you with greater control and flexibility over
            your data.
          </p>
        </dd>
      </div>
      <!-- More questions... -->
    </dl>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790549/xbkxffj5xdm3w2ly1tha.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Faq Section'
        },
        {
            id: 'TS2',
            label: 'Team Section',
            content:   `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="max-w-xl mx-auto text-center lg:text-balance">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
      >
        tagline</span
      >
      <h1 class="text-4xl mt-4 font-semibold tracking-tight text-base-900">
        Introducing our team
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Uniting talent with vision. Get to know the dedicated professionals who
        blend their skills and passion to lead us to new heights.
      </p>
    </div>
    <ul
      role="list"
      class="mt-12 grid sm:grid-cols-2 md:grid-cols-3 text-center lg:divide-x lg:grid-cols-4 lg:border-x lg:mt-24"
    >
      <li class="p-8">
        <div class="flex flex-col gap-4">
          <img
            class="object-cover rounded-full size-16 lg:size-20 mx-auto"
            src="https://oxbowui.com/avatars/1.avif"
            alt="#_"
          />
          <div>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Mike Vega
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Creator of Oxbow UI.com
            </p>
          </div>
        </div>
      </li>
      <li class="p-8">
        <div class="flex flex-col gap-4">
          <img
            class="object-cover rounded-full size-16 lg:size-20 mx-auto"
            src="https://oxbowui.com/avatars/2.avif"
            alt="#_"
          />
          <div>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Juan Echanove
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Pay Oneeer
            </p>
          </div>
        </div>
      </li>
      <li class="p-8">
        <div class="flex flex-col gap-4">
          <img
            class="object-cover rounded-full size-16 lg:size-20 mx-auto"
            src="https://oxbowui.com/avatars/3.avif"
            alt="#_"
          />
          <div>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Elona Muska
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Fesla
            </p>
          </div>
        </div>
      </li>
      <li class="p-8">
        <div class="flex flex-col gap-4">
          <img
            class="object-cover rounded-full size-16 lg:size-20 mx-auto"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="#_"
          />
          <div>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Messina Lionel
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              COO at Pff Inc
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="flex text-center items-center gap-2 text-base-500 text-sm mt-8 justify-center"
    >
      We are hiring:
      <a
        href="#_"
        aria-label="Action"
        class="text-accent-500 hover:text-base-900 text-sm font-medium duration-300 flex items-center gap-2"
      >
        See all our open roles
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790629/iflemoq0mghmqzwq84ar.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Team Section'
        },
        {
            id: 'BES1',
            label: 'Blog Entries Section',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="max-w-xl lg:text-balance">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Tagline</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight lg:text-7xl text-base-900 sm:text-balance"
      >
        From Our Blog
      </h1>
      <p class="mt-6 text-base font-medium text-base-500">
        Dive into our latest articles and stay updated with fresh perspectives
        and expert advice.
      </p>
      <form class="w-full mt-8 sm:flex sm:max-w-md">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          type="email"
          name="email-address"
          autocomplete="email"
          placeholder="Enter your email"
          aria-placeholder="Enter your email"
          required=""
          class="block w-full h-10 px-4 py-2 text-sm text-accent-700 duration-300 bg-white border border-transparent rounded-lg shadow appearance-none ring-1 ring-base-200 placeholder-base-400 focus:border-base-300 focus:bg-transparent focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2 sm:text-sm"
        />
        <div class="mt-2 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            class="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg shadow sm:w-auto bg-accent-700 hover:to-accent-800 shadow-accent-600/50 focus:ring-2 focus:ring-accent-950 focus:ring-offset-2 ring-offset-base-200 hover:shadow-none lg:w-auto"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p class="text-xs mt-3 text-base-500">
        When you sign up, you accept our
        <a class="text-accent-600 hover:text-base-900" href="#_"
          >Terms of Service</a
        >
        and
        <a class="text-accent-600 hover:text-base-900" href="#_"
          >Privacy Policy</a
        >.
      </p>
    </div>
    <div
      class="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-80rem))]"
    >
      <div
        class="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 sm:block"
      ></div>
      <div class="space-y-16 mt-32">
        <article class="relative group">
          <div
            class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-base-50 duration-300"
          ></div>
          <svg
            viewBox="0 0 9 9"
            class="hidden absolute right-full mr-6 top-2 text-accent-500 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
          >
            <circle
              cx="4.5"
              cy="4.5"
              r="4.5"
              stroke-width="2"
              stroke="currentColor"
              class="fill-white"
            ></circle>
          </svg>
          <div class="relative">
            <h3
              class="tracking-tight text-2xl font-medium text-base-900 pt-8 lg:pt-0"
            >
              Responsive web design best practices
            </h3>
            <div class="mt-2 mb-4 text-base lg:text-lg text-base-500">
              <p>
                Learn the best practices for creating responsive web designs
                that provide a seamless user experience across all devices.
              </p>
            </div>
            <dl
              class="absolute left-0 top-0 tracking-tight text-lg font-medium text-base-900 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
            >
              <dt class="sr-only">Mon Mar 25</dt>
              <dd class="whitespace-nowrap">
                <time datetime="Mon Mar 25">Mon Mar 25</time>
              </dd>
            </dl>
          </div>
          <a
            class="flex items-center text-sm text-accent-700 font-medium"
            href="#_"
          >
            <span
              class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
            ></span>
            <span
              class="text-accent-500 hover:text-base-900 text-sm font-medium duration-300 flex items-center gap-2 relative"
            >
              Read more
              <span class="sr-only"
                >, Responsive web design best practices</span
              >
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </a>
        </article>
        <article class="relative group">
          <div
            class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-base-50 duration-300"
          ></div>
          <svg
            viewBox="0 0 9 9"
            class="hidden absolute right-full mr-6 top-2 text-accent-500 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
          >
            <circle
              cx="4.5"
              cy="4.5"
              r="4.5"
              stroke-width="2"
              stroke="currentColor"
              class="fill-white"
            ></circle>
          </svg>
          <div class="relative">
            <h3
              class="tracking-tight text-2xl font-medium text-base-900 pt-8 lg:pt-0"
            >
              Javascript frameworks: a comparison
            </h3>
            <div class="mt-2 mb-4 text-base lg:text-lg text-base-500">
              <p>
                An in-depth comparison of the most popular JavaScript
                frameworks, including React, Vue, and Angular, to help you
                choose the right one for your project.
              </p>
            </div>
            <dl
              class="absolute left-0 top-0 tracking-tight text-lg font-medium text-base-900 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
            >
              <dt class="sr-only">Wed Apr 10</dt>
              <dd class="whitespace-nowrap">
                <time datetime="Wed Apr 10">Wed Apr 10</time>
              </dd>
            </dl>
          </div>
          <a
            class="flex items-center text-sm text-accent-700 font-medium"
            href="#_"
          >
            <span
              class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
            ></span>
            <span
              class="text-accent-500 hover:text-base-900 text-sm font-medium duration-300 flex items-center gap-2 relative"
            >
              Read more
              <span class="sr-only">, Javascript frameworks: a comparison</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </a>
        </article>
        <article class="relative group">
          <div
            class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-base-50 duration-300"
          ></div>
          <svg
            viewBox="0 0 9 9"
            class="hidden absolute right-full mr-6 top-2 text-accent-500 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
          >
            <circle
              cx="4.5"
              cy="4.5"
              r="4.5"
              stroke-width="2"
              stroke="currentColor"
              class="fill-white"
            ></circle>
          </svg>
          <div class="relative">
            <h3
              class="tracking-tight text-2xl font-medium text-base-900 pt-8 lg:pt-0"
            >
              The future of CSS: new features to watch
            </h3>
            <div class="mt-2 mb-4 text-base lg:text-lg text-base-500">
              <p>
                Explore the latest features and updates in CSS that are shaping
                the future of web design and development.
              </p>
            </div>
            <dl
              class="absolute left-0 top-0 tracking-tight text-lg font-medium text-base-900 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
            >
              <dt class="sr-only">Fri May 05</dt>
              <dd class="whitespace-nowrap">
                <time datetime="Fri May 05">Fri May 05</time>
              </dd>
            </dl>
          </div>
          <a
            class="flex items-center text-sm text-accent-700 font-medium"
            href="#_"
          >
            <span
              class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
            ></span>
            <span
              class="text-accent-500 hover:text-base-900 text-sm font-medium duration-300 flex items-center gap-2 relative"
            >
              Read more
              <span class="sr-only"
                >, The future of CSS: new features to watch</span
              >
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </a>
        </article>
        <article class="relative group">
          <div
            class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-base-50 duration-300"
          ></div>
          <svg
            viewBox="0 0 9 9"
            class="hidden absolute right-full mr-6 top-2 text-accent-500 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
          >
            <circle
              cx="4.5"
              cy="4.5"
              r="4.5"
              stroke-width="2"
              stroke="currentColor"
              class="fill-white"
            ></circle>
          </svg>
          <div class="relative">
            <h3
              class="tracking-tight text-2xl font-medium text-base-900 pt-8 lg:pt-0"
            >
              User experience design principles
            </h3>
            <div class="mt-2 mb-4 text-base lg:text-lg text-base-500">
              <p>
                Understand the key principles of user experience design and how
                to apply them to create intuitive and user-friendly websites.
              </p>
            </div>
            <dl
              class="absolute left-0 top-0 tracking-tight text-lg font-medium text-base-900 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"
            >
              <dt class="sr-only">Tue Jun 15</dt>
              <dd class="whitespace-nowrap">
                <time datetime="Tue Jun 15">Tue Jun 15</time>
              </dd>
            </dl>
          </div>
          <a
            class="flex items-center text-sm text-accent-700 font-medium"
            href="#_"
          >
            <span
              class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"
            ></span>
            <span
              class="text-accent-500 hover:text-base-900 text-sm font-medium duration-300 flex items-center gap-2 relative"
            >
              Read more
              <span class="sr-only">, User experience design principles</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right relative mt-px overflow-visible ml-2.5 size-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </a>
        </article>
      </div>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790713/bztxzowpwaxd8lyn1fpy.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Blog Entries Section'
        },
        {
            id: 'BC2',
            label: 'Blog Content',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="text-center max-w-xl mx-auto">
      <dl
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
      >
        <dt class="sr-only">01.01.24</dt>
        <dd><time datetime="01.01.24">01.01.24</time></dd>
      </dl>
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Responsive web design best practices
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 lg:text-balance">
        Learn the best practices for creating responsive web designs that
        provide a seamless user experience across all devices.
      </p>
      <div class="mt-6 flex justify-center text-left">
        <div class="relative flex items-center gap-x-4">
          <img
            src="https://oxbowui.com/avatars/1.avif"
            alt="#_"
            class="size-12 rounded-full bg-base-50 object-cover"
          />
          <div class="text-sm leading-6">
            <p class="font-semibold text-base-900">
              <a href="#_"> <span class="absolute inset-0"></span> John Doe </a>
            </p>
            <p class="text-xs text-base-500">Oxbow UI Writter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 lg:mt-24">
      <div
        class="mx-auto prose text-base-500 prose-a:font-semibold prose-a:text-accent-300 hover:prose-a:text-base-900 prose-headings:text-base-900 prose-blockquote:text-accent-400 prose-code:text-accent-400 prose-strong:text-accent-500 prose-img:rounded-3xl prose-pre:rounded-2xl"
      >
        <p>
          Responsive web design is critical in today's digital landscape, where
          users access websites from a variety of devices with different screen
          sizes and resolutions.
        </p>
        <h2>Mobile-First Approach</h2>
        <p>
          The mobile-first approach involves designing your website starting
          with the smallest screen sizes first and then gradually enhancing the
          design for larger screens. This method ensures that your site is
          accessible and functional on mobile devices, which are often the
          primary way users access the web. By prioritizing mobile design, you
          focus on the Core content and functionality, providing a solid
          foundation that can be built upon for larger screens.
        </p>
        <h3>Advantages of Mobile-First Approach</h3>
        <p>
          Designing for mobile first helps streamline content, improve
          performance, and ensure accessibility. This approach forces designers
          to focus on what's truly important, removing unnecessary elements that
          could clutter the user experience on smaller screens. Additionally, it
          typically results in faster load times and better overall performance,
          which are critical for retaining mobile users.
        </p>
        <blockquote>
          <p>Responsive web design is not a feature, it's a must.</p>
          <small>- Jeffrey Zeldman</small>
        </blockquote>
        <h2>Inclusion</h2>
        <p>
          Responsive web design is vital for providing a seamless user
          experience across all devices. By following these best practices, you
          can create a website that is both functional and visually appealing,
          regardless of the screen size. Embracing responsive design not only
          improves user satisfaction but also enhances your site's accessibility
          and performance, making it a valuable approach in today's multi-device
          world.
        </p>
      </div>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790800/uwruefdwwkl5sa4zfunb.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Blog Content'
        },
        {
            id: 'TS2',
            label: 'Testimonials Section',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="text-center max-w-xl mx-auto">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Tagline</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 lg:text-balance"
      >
        Hear from our customers about their experiences
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 lg:text-balance">
        Find out how our users are using Oxbow UI to create a customized landing
        page for their business.
      </p>
    </div>
    <ul
      role="list"
      class="mt-12 grid sm:grid-cols-2 text-center md:grid-cols-3 gap-12 lg:mt-24"
    >
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Mike Vega
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Creator of Oxbow UI.com
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              Being in the financial industry, we were always looking for ways
              to enhance our transactions&#39; security and efficiency.
            </p>
          </blockquote>
        </figure>
      </li>
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Juan Echanove
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Pay Oneeer
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              Oxbow UI is a platform that allows you to create a customized
              landing page for your business.
            </p>
          </blockquote>
        </figure>
      </li>
      <li>
        <figure class="flex flex-col">
          <figcaption>
            <h3 class="tracking-tight text-lg font-medium text-base-900">
              Elona Muska
            </h3>
            <p class="mt-2 text-sm text-base-500 text-balance">
              Founder of Fesla
            </p>
          </figcaption>
          <blockquote class="mt-6">
            <span class="flex items-center gap-2 justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                ></path>
              </svg>
            </span>
            <p class="text-sm mt-4 lg:text-base text-base-500 text-pretty">
              With Oxbow UI, we can create a customized landing page for our
              business that showcases our products and services in the best
              possible way.
            </p>
          </blockquote>
        </figure>
      </li>
    </ul>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790800/uwruefdwwkl5sa4zfunb.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Testimonials Section'
        },
        {
            id: 'LS1',
            label: 'Logos Section',
            content: `<section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="mx-auto">
      <div
        class="mx-auto relative grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain relative"
          src="https://oxbowui.com/brands/1.svg"
          alt="#_"
          width="158"
          height="48"
        /><img
          class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain relative"
          src="https://oxbowui.com/brands/2.svg"
          alt="#_"
          width="158"
          height="48"
        /><img
          class="col-span-2 lg:col-span-1 max-h-12 w-full object-contain relative"
          src="https://oxbowui.com/brands/9.svg"
          alt="#_"
          width="158"
          height="48"
        /><img
          class="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain relative"
          src="https://oxbowui.com/brands/4.svg"
          alt="#_"
          width="158"
          height="48"
        /><img
          class="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain relative"
          src="https://oxbowui.com/brands/5.svg"
          alt="#_"
          width="158"
          height="48"
        />
      </div>
      <h2
        class="font-mono uppercase mt-10 tracking-tighter text-sm font-medium text-base-900 text-center"
      >
        Trusted by industry leaders and our families because we pay them
      </h2>
    </div>
  </div>
</section>
`,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727790972/dvog0rbkckpo7epe7lct.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Logos Section'
        },
        {
            id: 'SS3',
            label: 'Stats Section',
            content: ` <section>
  <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <dl
      class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4 text-center"
    >
      <div class="flex flex-col">
        <dt class="mt-4 tracking-tight text-lg font-medium text-base-900">
          Working Individuals
        </dt>
        <dd class="order-first text-5xl font-normal font-mono text-accent-600">
          30%
        </dd>
      </div>
      <div class="flex flex-col">
        <dt class="mt-4 tracking-tight text-lg font-medium text-base-900">
          Super low fee
        </dt>
        <dd class="order-first text-5xl font-normal font-mono text-accent-600">
          40%
        </dd>
      </div>
      <div class="flex flex-col">
        <dt class="mt-4 tracking-tight text-lg font-medium text-base-900">
          Great Commitment
        </dt>
        <dd class="order-first text-5xl font-normal font-mono text-accent-600">
          50%
        </dd>
      </div>
      <div class="flex flex-col">
        <dt class="mt-4 tracking-tight text-lg font-medium text-base-900">
          Massive Earnings
        </dt>
        <dd class="order-first text-5xl font-normal font-mono text-accent-600">
          60M
        </dd>
      </div>
    </dl>
  </div>
</section>
 `,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791031/d7qff4ebiimlscackgiy.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Stats Section'
        },
       
       
        {
            id: 'FFS3',
            label: 'Footer Section',
            content: ` <section>
  <div class="px-8 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xl font-semibold tracking-tight text-base-900">
          Get started with our app today
        </p>
        <p class="mt-4 text-sm text-base-500 lg:text-base">
          Streamline your workflow and collaborate seamlessly on staging and
          temporary environments
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
        <button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 md:justify-center shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9998 14.5L21.1998 10L4.8998 1.2C4.7998 1.1 4.5998 1.1 4.2998 1L16.9998 14.5Z"
              fill="#00F076"
            ></path>
            <path
              d="M22.9998 21L28.8998 17.8C29.5998 17.4 29.9998 16.8 29.9998 16C29.9998 15.2 29.5998 14.5 28.8998 14.2L22.9998 11L18.2998 16L22.9998 21Z"
              fill="#FFC900"
            ></path>
            <path
              d="M2.4 1.8999C2.1 2.1999 2 2.5999 2 2.9999V28.9999C2 29.3999 2.1 29.7999 2.4 30.1999L15.6 15.9999L2.4 1.8999Z"
              fill="#00D6FF"
            ></path>
            <path
              d="M16.9998 17.5L4.2998 31C4.4998 31 4.6998 30.9 4.8998 30.8L21.1998 22L16.9998 17.5Z"
              fill="#FF3A44"
            ></path>
          </svg>
          <span class="text-xs text-base-600"
            >Download on Google Play</span
          ></button
        ><button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 61 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.0332 39.3793C51.0696 36.549 51.8214 33.7739 53.2186 31.3122C54.6157 28.8506 56.6129 26.7823 59.0241 25.2999C57.4923 23.1122 55.4715 21.3118 53.1222 20.0417C50.7728 18.7716 48.1597 18.0668 45.4904 17.9833C39.7961 17.3856 34.2759 21.3906 31.3741 21.3906C28.4163 21.3906 23.9488 18.0427 19.1379 18.1416C16.0261 18.2422 12.9935 19.147 10.3354 20.7681C7.6773 22.3892 5.48446 24.6711 3.97052 27.3917C-2.5874 38.7459 2.30423 55.433 8.58628 64.611C11.7293 69.1052 15.4027 74.1253 20.2092 73.9473C24.9126 73.7522 26.6693 70.948 32.3467 70.948C37.9715 70.948 39.6195 73.9473 44.5236 73.8341C49.5706 73.7522 52.7504 69.3199 55.7833 64.7832C58.0416 61.5809 59.7793 58.0417 60.9322 54.2966C58 53.0565 55.4977 50.9806 53.7374 48.3279C51.9771 45.6751 51.0366 42.5629 51.0332 39.3793Z"
              fill="black"
            ></path>
            <path
              d="M41.7704 11.9472C44.5223 8.64377 45.878 4.39769 45.5498 0.110733C41.3456 0.5523 37.4621 2.56163 34.673 5.73837C33.3094 7.29028 32.265 9.09575 31.5995 11.0515C30.9341 13.0073 30.6606 15.0751 30.7948 17.1367C32.8976 17.1583 34.978 16.7025 36.8791 15.8036C38.7803 14.9047 40.4527 13.5862 41.7704 11.9472V11.9472Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="text-xs text-base-600">Download on App Store</span>
        </button>
      </div>
    </div>
    <div
      class="grid pt-6 mt-6 border-t grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24"
    >
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-0">
          <h3 id="footer-heading-0" class="text-sm font-medium text-base-900">
            Company
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Leadership Team
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-1">
          <h3 id="footer-heading-1" class="text-sm font-medium text-base-900">
            Services
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Marketing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Commerce
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Insights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-2">
          <h3 id="footer-heading-2" class="text-sm font-medium text-base-900">
            Resources
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Webinars
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                White Papers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="space-y-4">
        <nav aria-labelledby="footer-heading-3">
          <h3 id="footer-heading-3" class="text-sm font-medium text-base-900">
            Support &amp; Legal
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                API Status
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Live Chat
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-base-600 text-sm md:text-base hover:text-accent-500 duration-300"
              >
                Email Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="pt-6 mt-12 border-t flex flex-col md:flex-row items-center justify-between"
    >
      <a
        href="#_"
        class="font-medium w-full sm:w-auto group flex gap-3 items-center group-hover:text-accent-600 duration-300 group-hover:animate-pulse"
        ><img
          class="h-7 2xl:h-12"
          src="https://oxbowui.com/images/oxbow/blueLineLogo.png"
          alt="#_"
        />
        Oxbow UI</a
      >
      <p class="border-base-700 text-base-400 text-sm">
        Copyright © 2024 Oxbow UI. All rights reserved.
      </p>
    </div>
  </div>
</section>
 `,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791100/okqrchbw1xf8csxic7nu.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Footer Section'
        }
,
        {
            id: 'CS2',
            label: 'Contact Section',
            content: ` <section>
  <div class="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="max-w-xl lg:text-balance mx-auto text-center">
      <span
        class="font-mono text-xs font-medium tracking-tight text-accent-600 uppercase"
        >Contact</span
      >
      <h1
        class="text-4xl mt-4 font-semibold tracking-tight text-base-900 sm:text-balance"
      >
        We would love to hear from you!
      </h1>
      <p class="mt-6 text-base font-medium text-base-500 sm:text-balance">
        Let us know what you have in mind, and we will get back to you as soon
        as possible.
      </p>
    </div>
    <dl
      class="grid text-center mt-12 sm:grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
    >
      <div class="flex h-full flex-col text-sm justify-between">
        <div>
          <dt class="flex flex-col gap-2 tracking-tighter text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler mx-auto icon-tabler-credit-card size-5 text-accent-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
              ></path>
              <path d="M3 10l18 0"></path>
              <path d="M7 15l.01 0"></path>
              <path d="M11 15l2 0"></path>
            </svg>
            <p class="tracking-tight text-lg font-medium text-base-900">
              Sales
            </p>
          </dt>
          <dd class="mt-2 text-sm text-base-500">
            Find out how Oxbow UI can help your business.
          </dd>
        </div>
        <a
          href="#_"
          class="text-accent-500 hover:text-base-900 justify-center text-sm font-medium duration-300 flex items-center gap-2 mt-8"
        >
          Talk to sales
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </a>
      </div>
      <div class="flex h-full flex-col text-sm justify-between">
        <dt>
          <div class="flex flex-col gap-2 tracking-tighter text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-lifebuoy mx-auto size-5 text-accent-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M15 15l3.35 3.35"></path>
              <path d="M9 15l-3.35 3.35"></path>
              <path d="M5.65 5.65l3.35 3.35"></path>
              <path d="M18.35 5.65l-3.35 3.35"></path>
            </svg>
            <div class="tracking-tight text-lg font-medium text-base-900">
              Support
            </div>
          </div>
          <div class="mt-2 text-sm text-base-500">
            Have a support question? We’ve got answers.
          </div>
        </dt>
        <a
          href="#_"
          class="text-accent-500 hover:text-base-900 justify-center text-sm font-medium duration-300 flex items-center gap-2 mt-8"
        >
          Talk to support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </a>
      </div>
      <div class="flex h-full flex-col text-sm justify-between">
        <div>
          <dt class="flex flex-col gap-2 tracking-tighter text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-news mx-auto size-5 text-accent-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"
              ></path>
              <path d="M8 8l4 0"></path>
              <path d="M8 12l4 0"></path>
              <path d="M8 16l4 0"></path>
            </svg>
            <div class="tracking-tight text-lg font-medium text-base-900">
              Press
            </div>
          </dt>
          <dd class="mt-2 text-sm text-base-500">
            Any media questions or publication ideas you have, we’re happy to
            connect.
          </dd>
        </div>
        <a
          href="#_"
          class="text-accent-500 hover:text-base-900 justify-center text-sm font-medium duration-300 flex items-center gap-2 mt-8"
        >
          Talk to press
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </a>
      </div>
      <div class="flex h-full flex-col text-sm justify-between">
        <div>
          <dt class="flex flex-col gap-2 tracking-tighter text-xs">
            <svg
              mx-auto
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users-plus mx-auto size-5 text-accent-500"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path
                d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"
              ></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
            </svg>
            <div class="tracking-tight text-lg font-medium text-base-900">
              Partners
            </div>
          </dt>
          <dd class="mt-2 text-sm text-base-500">
            We love partnering with other businesses. Let us know what you’re
            thinking.
          </dd>
        </div>
        <a
          href="#_"
          class="text-accent-500 hover:text-base-900 justify-center text-sm font-medium duration-300 flex items-center gap-2 mt-8"
        >
          Talk to our partners
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </a>
      </div>
    </dl>
  </div>
</section>
 `,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791175/gkfbpboegs3bsjgrv1yp.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Contact Section'
        },
       
        {
            id: 'CNS2',
            label: 'Cta Newsletter Section',
            content: ` <section>
  <div class="relative px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="grid items-end grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <p
          class="text-xl font-semibold tracking-tight text-base-900 lg:text-3xl"
        >
          Join our newsletter
        </p>
        <p class="mt-4 text-sm text-base-500 lg:text-base">
          Stay up to date with our latest news and updates.
        </p>
      </div>
      <form class="w-full mt-8 sm:flex sm:max-w-md sm:ml-auto">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          type="email"
          name="email-address"
          autocomplete="email"
          placeholder="Enter your email"
          aria-placeholder="Enter your email"
          required=""
          class="block w-full h-10 px-4 py-2 text-sm text-accent-700 duration-300 bg-white border border-transparent rounded-lg shadow appearance-none ring-1 ring-base-200 placeholder-base-400 focus:border-base-300 focus:bg-transparent focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2 sm:text-sm"
        />
        <div class="mt-2 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            class="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg shadow sm:w-auto bg-accent-700 hover:to-accent-800 shadow-accent-600/50 focus:ring-2 focus:ring-accent-950 focus:ring-offset-2 ring-offset-base-200 hover:shadow-none lg:w-auto"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
 `,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791031/d7qff4ebiimlscackgiy.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'Cta Newsletter Section'
        },
       
        {
            id: 'CTA3',
            label: 'CTA Section',
            content: ` <section>
  <div class="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div class="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <p
          class="text-xl lg:text-3xl font-semibold tracking-tight text-base-900"
        >
          Get started with our app today
        </p>
        <p class="mt-4 text-sm text-base-500 lg:text-base">
          Streamline your workflow and collaborate seamlessly on staging and
          temporary environments
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
        <button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 md:justify-center shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9998 14.5L21.1998 10L4.8998 1.2C4.7998 1.1 4.5998 1.1 4.2998 1L16.9998 14.5Z"
              fill="#00F076"
            ></path>
            <path
              d="M22.9998 21L28.8998 17.8C29.5998 17.4 29.9998 16.8 29.9998 16C29.9998 15.2 29.5998 14.5 28.8998 14.2L22.9998 11L18.2998 16L22.9998 21Z"
              fill="#FFC900"
            ></path>
            <path
              d="M2.4 1.8999C2.1 2.1999 2 2.5999 2 2.9999V28.9999C2 29.3999 2.1 29.7999 2.4 30.1999L15.6 15.9999L2.4 1.8999Z"
              fill="#00D6FF"
            ></path>
            <path
              d="M16.9998 17.5L4.2998 31C4.4998 31 4.6998 30.9 4.8998 30.8L21.1998 22L16.9998 17.5Z"
              fill="#FF3A44"
            ></path>
          </svg>
          <span class="text-xs text-base-600"
            >Download on Google Play</span
          ></button
        ><button
          class="flex items-center w-full lg:w-auto justify-between sm:justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-base-500 transition-all bg-base-50 border border-base-300 rounded-lg hover:text-base-700 focus:ring-2 shadow shadow-base-500/5 focus:ring-base-900 focus:ring-offset-2 ring-offset-base-200 duration-300 hover:border-base-200 hover:shadow-none"
        >
          <svg
            class="size-5"
            viewBox="0 0 61 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.0332 39.3793C51.0696 36.549 51.8214 33.7739 53.2186 31.3122C54.6157 28.8506 56.6129 26.7823 59.0241 25.2999C57.4923 23.1122 55.4715 21.3118 53.1222 20.0417C50.7728 18.7716 48.1597 18.0668 45.4904 17.9833C39.7961 17.3856 34.2759 21.3906 31.3741 21.3906C28.4163 21.3906 23.9488 18.0427 19.1379 18.1416C16.0261 18.2422 12.9935 19.147 10.3354 20.7681C7.6773 22.3892 5.48446 24.6711 3.97052 27.3917C-2.5874 38.7459 2.30423 55.433 8.58628 64.611C11.7293 69.1052 15.4027 74.1253 20.2092 73.9473C24.9126 73.7522 26.6693 70.948 32.3467 70.948C37.9715 70.948 39.6195 73.9473 44.5236 73.8341C49.5706 73.7522 52.7504 69.3199 55.7833 64.7832C58.0416 61.5809 59.7793 58.0417 60.9322 54.2966C58 53.0565 55.4977 50.9806 53.7374 48.3279C51.9771 45.6751 51.0366 42.5629 51.0332 39.3793Z"
              fill="black"
            ></path>
            <path
              d="M41.7704 11.9472C44.5223 8.64377 45.878 4.39769 45.5498 0.110733C41.3456 0.5523 37.4621 2.56163 34.673 5.73837C33.3094 7.29028 32.265 9.09575 31.5995 11.0515C30.9341 13.0073 30.6606 15.0751 30.7948 17.1367C32.8976 17.1583 34.978 16.7025 36.8791 15.8036C38.7803 14.9047 40.4527 13.5862 41.7704 11.9472V11.9472Z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="text-xs text-base-600">Download on App Store</span>
        </button>
      </div>
    </div>
  </div>
</section>
 `,
            media: '<img src="https://res.cloudinary.com/dnbf9z1yg/image/upload/v1727791358/gbe3i47hlibkl1rmhn2o.png" />',
            category: 'Design',
            subcategory: 'Template',
            type: 'CTA Section'
        },
        {
            id: 'AS3',
            label: 'Simple Accordion ',
            content: `
<div class="mx-auto max-w-lg">
  <div class="divide-y divide-gray-100">
    <details class="group" open>
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
        Accordion item 01
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the first item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
        Accordion item 02
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the second item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900">
        Accordion item 03
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the third item's accordion body.</div>
    </details>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727787808/myyvw70zaxelzwtenqnl.png" />',
            category: 'Element',
            subcategory: 'Accordion',
            // type: 'Accordion'
        },
        {
            id: 'APM3',
            label: 'Plus Minus Accordion ',
            content: `
<div class="mx-auto max-w-lg">
  <div class="divide-y divide-gray-100">
    <details class="group" open>
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
        Accordion item 01
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 group-open:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-5 w-5 group-open:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the first item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
        Accordion item 02
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 group-open:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-5 w-5 group-open:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the second item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
        Accordion item 03
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 group-open:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-5 w-5 group-open:block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
          </svg>
        </div>
      </summary>
      <div class="pb-4 text-secondary-500">This is the third item's accordion body.</div>
    </details>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727787808/bbqs0ukvssjdra8sqp6g.png" />',
            category: 'Element',
            subcategory: 'Accordion',
            // type: 'Accordion'
        },
        {
            id: 'ABB3',
            label: 'Bordered Accordion ',
            content: `
<div class="mx-auto max-w-lg">
  <div class="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <details class="group" open>
      <summary class="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
        Accordion item 01
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="border-t border-t-gray-100 p-4 text-secondary-500">This is the first item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
        Accordion item 02
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="border-t border-t-gray-100 p-4 text-secondary-500">This is the second item's accordion body.</div>
    </details>
    <details class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
        Accordion item 03
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </summary>
      <div class="border-t border-t-gray-100 p-4 text-secondary-500">This is the third item's accordion body.</div>
    </details>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727787808/kmuxnaalpoc3dh7oc9ki.png" />',
            category: 'Element',
            subcategory: 'Accordion',
            // type: 'Accordion'
        },
        {
            id: 'AS33',
            label: 'Shadow Accordion ',
            content: `
<div class="mx-auto max-w-lg">
  <div class="space-y-6">
    <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
        Product Designer
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-secondary-500">We're looking for a mid-level product designer to join our team.</div>
    </details>
    <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
        Engineering Manager
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-secondary-500">We're looking for an experienced engineering manager to join our team.</div>
    </details>
    <details class="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
        Customer Success Manager
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-secondary-500">We're looking for a customer success manager to join our team.</div>
    </details>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727787808/kmuxnaalpoc3dh7oc9ki.png" />',
            category: 'Element',
            subcategory: 'Accordion',
            // type: 'Accordion'
        },
        {
            id: 'ASimple',
            label: 'Simple Alert ',
            content: `
<div class="space-y-4">
  <div class="flex rounded-md bg-primary-50 p-4 text-sm text-primary-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg>
    <div><b>Info alert</b> Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</div>
    <button class="ml-auto" x-on:click="showAlert = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
  <div class="flex rounded-md bg-green-50 p-4 text-sm text-green-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
    </svg>
    <div><b>Success alert</b> Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</div>
    <button class="ml-auto" x-on:click="showAlert = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
  <div class="flex rounded-md bg-yellow-50 p-4 text-sm text-yellow-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg>

    <div><b>Warning alert</b> Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</div>
    <button class="ml-auto" x-on:click="showAlert = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
  <div class="flex rounded-md bg-red-50 p-4 text-sm text-red-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
    </svg>

    <div><b>Error alert</b> Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</div>
    <button class="ml-auto" x-on:click="showAlert = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788304/s9beoymnfetnaa15mjpk.png" />',
            category: 'Element',
            subcategory: 'Alert',
            // type: 'Accordion'
        },
        {
            id: 'AIcon',
            label: 'Icon Alert ',
            content: `
<div class="flex rounded-md bg-primary-50 p-4 text-sm text-primary-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
    <path fill-rule="evenodd" d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
  </svg>
  <div>
    <h4 class="font-bold">Info alert</h4>
    <div class="mt-1">
      <p>Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</p>
    </div>
  </div>
  <button class="ml-auto" x-on:click="showAlert = false">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  </button>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788304/zng173b2jr6sfrf4tsua.png" />',
            category: 'Element',
            subcategory: 'Alert',
            // type: 'Accordion'
        },
        {
            id: 'ADescriptive',
            label: 'Descriptive Alert ',
            content: `
<div>
  <div class="flex rounded-md bg-red-50 p-4 text-sm text-red-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
    </svg>
    <div>
      <h4 class="font-bold">Error alert</h4>
      <div class="mt-1">
        <ul class="list-inside list-disc">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
    <button class="ml-auto" x-on:click="showAlert = false">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788303/amehjtvmjnvyjqzaeaff.png" />',
            category: 'Element',
            subcategory: 'Alert',
            // type: 'Accordion'
        },{
            id: 'AList',
            label: 'List Alert ',
            content: `

            <div>
            <div class="flex rounded-md bg-red-50 p-4 text-sm text-red-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
              </svg>
              <div>
                <h4 class="font-bold">Error alert</h4>
                <div class="mt-1">
                  <ul class="list-inside list-disc">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
              </div>
              <button class="ml-auto" x-on:click="showAlert = false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
          
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788304/azb3rhf1noh6ppxrbcba.png" />',
            category: 'Element',
            subcategory: 'Accordion',
            // type: 'Accordion'
        },
        {
            id: 'Action3',
            label: 'Action Alert ',
            content: `
<div>
  <div class="flex rounded-md bg-green-50 p-4 text-sm text-green-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 h-5 w-5 flex-shrink-0">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
    </svg>
    <div>
      <h4 class="font-bold">Success alert</h4>
      <div class="mt-1">Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis impedit.</div>
      <div class="mt-2 flex space-x-4">
        <button class="inline-block font-bold leading-loose">View Details</button>
        <button class="inline-block font-bold leading-loose" x-on:click="showAlert = false">Dismiss</button>
      </div>
    </div>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788304/r7qgegknosr9ypsveh1m.png" />',
            category: 'Element',
            subcategory: 'Alert',
            // type: 'Accordion'
        },
        {
            id: 'BSIM',
            label: 'Simple Badge ',
            content: `<span class="rounded-full bg-primary-50 px-2 py-1 text-xs font-semibold text-primary-600"> Badge </span>`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788726/h0ygqjzfrlcumug3flvp.png" />',
            category: 'Element',
            subcategory: 'Badge',
            // type: 'Accordion'
        },
        {
            id: 'BadgeICO',
            label: 'Icon Badge ',
            content: `  <span class="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-1 text-xs font-semibold text-primary-600">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
    </svg>
    Badge
  </span>`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727788726/ckymkse8yo4ubcjfgpma.png" />',
            category: 'Element',
            subcategory: 'Badge',
            // type: 'Accordion'
        },
        {
            id: 'Breadcrumb1',
            label: 'Simple Breadcrumb',
            content: `
<nav aria-label="breadcrumb">
  <ol class="inline-flex items-center space-x-4 py-2 text-sm font-medium">
    <li class="inline-flex items-center">
      <a href="" class="text-secondary-500 hover:text-secondary-600">Home</a>
    </li>
    <li class="inline-flex items-center space-x-4">
      <span class="text-secondary-400">/</span>
      <a href="" class="text-secondary-500 hover:text-secondary-600">Components</a>
    </li>
    <li class="inline-flex items-center space-x-4" aria-current="page">
      <span class="text-secondary-400">/</span>
      <a class="text-secondary-700 hover:text-secondary-700" href="#">Breadcrumb</a>
    </li>
  </ol>
</nav>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727789953/aruf4lnj2y7kkfzx0vun.png" />',
            category: 'Element',
            subcategory: 'Breadcrumb',
            // type: 'Accordion'
        },
        {
            id: 'Breadcrumb2',
            label: 'Arrow Accordion',
            content: `
<nav aria-label="breadcrumb">
  <ol class="inline-flex items-center space-x-4 py-2 text-sm font-medium">
    <li class="inline-flex items-center">
      <a href="#" class="text-secondary-500 hover:text-secondary-600">Home</a>
    </li>
    <li class="inline-flex items-center space-x-4">
      <svg class="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
      <a href="#" class="text-secondary-500 hover:text-secondary-600">Components</a>
    </li>
    <li class="inline-flex items-center space-x-4" aria-current="page">
      <svg class="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
      <a class="text-secondary-700 hover:text-secondary-700" href="#">Breadcrumb</a>
    </li>
  </ol>
</nav>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727789953/cm0ypdraenp4dpkechcd.png" />',
            category: 'Element',
            subcategory: 'Breadcrumb',
            // type: 'Accordion'
        },
        {
            id: 'ButtonS',
            label: 'Simple Button ',
            content: ` <button type="button" class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Button text</button>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727790255/bvb5n7nmrmtadoxhnefk.png" />',
            category: 'Element',
            subcategory: 'Button',
            // type: 'Accordion'
        },
        {
            id: 'ButtonI',
            label: 'Icon Button ',
            content: `  <button type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
    Download
  </button>`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727790255/kwv34aqpulxn17ofpjnt.png" />',
            category: 'Element',
            subcategory: 'Button',
            // type: 'Accordion'
        },
        {
            id: 'SimpleBG',
            label: 'Simple Button Group',
            content: ` <div class="inline-flex -space-x-0 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">One</button>
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">Two</button>
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">Three</button>
  </div>`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727791920/eb5voev8mfyfjsdzszot.png" />',
            category: 'Element',
            subcategory: 'Button Group',
            // type: 'Accordion'
        },
        {
            id: 'SlitBG',
            label: 'Slit Button Group',
            content: `
<button type="button" class="flex items-center divide-x rounded-lg border border-gray-300 bg-white text-center text-sm font-medium text-secondary-700 shadow-sm hover:bg-gray-100">
  <div class="flex items-center space-x-2 py-2.5 px-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary-400">
      <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
    </svg>

    <span>Bookmark</span>
  </div>
  <div class="py-2.5 px-3">1,800</div>
</button>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727791920/q78qwlcn1mxnx1j7emzo.png" />',
            category: 'Element',
            subcategory: 'Button Group',
            // type: 'Accordion'
        },
        {
            id: 'IconBBG',
            label: 'Icon Border Button Group',
            content: `
<div class="space-x-5">
  <div class="inline-flex space-x-0.5 overflow-hidden rounded-lg border border-gray-300 p-0.5 shadow-sm">
    <button type="button" class="rounded-md bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="inline-flex space-x-0.5 overflow-hidden rounded-lg border border-gray-300 p-0.5 shadow-sm">
    <button type="button" class="rounded-md bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727791920/oztjcuwq4oyoivay6bkr.png" />',
            category: 'Element',
            subcategory: 'Button Group',
            // type: 'Accordion'
        },
        {
            id: 'OIconBG1',
            label: 'Only Icon Button Group',
            content: `
<div class="space-x-5">
  <div class="inline-flex -space-x-0 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="inline-flex -space-x-0 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
    </button>
    <button type="button" class="bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727791920/vbeeu8enohs6ldihzrfg.png" />',
            category: 'Element',
            subcategory: 'Button Group',
            // type: 'Accordion'
        },
        {
            id: 'IconBG2',
            label: 'Icon Button Group',
            content: `
<div class="inline-flex -space-x-0 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
  <button type="button" class="inline-flex items-center bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 shadow-sm hover:bg-gray-100">
    <svg aria-hidden="true" class="mr-2 h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
    </svg>
    One
  </button>
  <button type="button" class="inline-flex items-center bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 shadow-sm hover:bg-gray-100">
    <svg aria-hidden="true" class="mr-2 h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
    </svg>
    Two
  </button>
  <button type="button" class="inline-flex items-center bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-700 shadow-sm hover:bg-gray-100">
    <svg aria-hidden="true" class="mr-2 h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path>
    </svg>
    Three
  </button>
</div>
`,
            media: '<img src="https://res.cloudinary.com/diemfyvd7/image/upload/v1727791920/aswsa6hp8uowhfobxotr.png" />',
            category: 'Element',
            subcategory: 'Button Group',
            // type: 'Accordion'
        },
        {
            id: 'HomeIcon',
            label: 'Home Icon',
            content: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`,
            media: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>',
            category: 'Element',
            subcategory: 'Icon',
            // type: 'Accordion'
        },
        {
            id: 'MenuIcon',
            label: 'Menu Icon',
            content: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`,
            media: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>',
            category: 'Element',
            subcategory: 'Icon',
            // type: 'Accordion'
        },
        {
            id: 'CloseIcon',
            label: 'Close Icon',
            content: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,
            media: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>',
            category: 'Element',
            subcategory: 'Icon',
            // type: 'Accordion'
        },
        {
            id: 'Logoutic',
            label: 'Logout Icon ',
            content: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>`,
            media: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>',
            category: 'Element',
            subcategory: 'Icon',
            // type: 'Accordion'
        },
        {
            id: 'Google',
            label: 'Google Logo',
            content: `<img src="https://tse2.mm.bing.net/th?id=OIP.arezqGrVeKUAmuKTaXGGEgHaEK&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse2.mm.bing.net/th?id=OIP.arezqGrVeKUAmuKTaXGGEgHaEK&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'Office',
            label: 'Office ',
            content: `<img src="https://tse1.mm.bing.net/th?id=OIP.vomQckN5198whQAcHxauqgHaFS&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse1.mm.bing.net/th?id=OIP.vomQckN5198whQAcHxauqgHaFS&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'Car',
            label: 'Car',
            content: `<img src="https://tse1.mm.bing.net/th?id=OIP.X42b4q5g88ldlViDnsLj9QHaEK&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse1.mm.bing.net/th?id=OIP.X42b4q5g88ldlViDnsLj9QHaEK&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'Appsme',
            label: 'Apps',
            content: `<img src="https://tse3.mm.bing.net/th?id=OIP.KCb6X0l_GrddOxEn9ooDQgHaEK&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse3.mm.bing.net/th?id=OIP.KCb6X0l_GrddOxEn9ooDQgHaEK&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'Teamme',
            label: 'Team',
            content: `<img src="https://tse1.mm.bing.net/th?id=OIP.Qhjvk8aoXzXt8QImJ2HCRgHaE7&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse1.mm.bing.net/th?id=OIP.Qhjvk8aoXzXt8QImJ2HCRgHaE7&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'Personme',
            label: 'Person',
            content: `<img src="https://tse2.mm.bing.net/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse2.mm.bing.net/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        },
        {
            id: 'MediaSocial',
            label: 'Socail Media',
            content: `<img src="https://tse1.mm.bing.net/th?id=OIP.f3KDuSwGFLRJ6PXXIsFBEAHaFs&pid=Api&P=0&h=180" />`,
            media: '<img src="https://tse1.mm.bing.net/th?id=OIP.f3KDuSwGFLRJ6PXXIsFBEAHaFs&pid=Api&P=0&h=180" />',
            category: 'Element',
            subcategory: 'Media',
            // type: 'Accordion'
        }
    ])
}
exports.checkuser = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                success: true,
                message: "User found",
                userid: existingUser._id
            })
        }


        return res.status(200).json({
            success: true,
            message: "User not found",
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.createuser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                success: true,
                message: "User found",
                userid: existingUser._id
            })
        }


        const response = await User.create({ name, email });
        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            userid: response._id
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

exports.fetchuser = async (req, res) => {
    try {
        const { _id } = req.body;

        const Userinfo = await User.findById({ _id });
        if (Userinfo) {
            return res.status(200).json({
                success: true,
                message: "found",
                user: Userinfo
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


exports.updateuser = async (req, res) => {
    try {
        const { _id, name } = req.body;

        const Userinfo = await User.findByIdAndUpdate(_id, { name });
        if (Userinfo) {
            return res.status(200).json({
                success: true,
                message: "Updated"
            })
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}