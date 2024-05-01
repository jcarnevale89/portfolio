<template lang="pug">
div(class='bg-white')
  //- Hero
  div(class='relative')
    div(class='mx-auto max-w-7xl')
      div(class='relative z-10 pt-14 lg:w-full lg:max-w-2xl')
        svg(
          class='absolute inset-y-0 right-8 hidden h-full w-80 transform fill-white translate-x-1/2 lg:block'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
        )
          polygon(points='0,0 90,0 50,100 0,100')
        div(class='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0')
          div(class='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl')
            h1(class='text-4xl font-bold tracking-tight text-gray-900 mb-6 sm:text-6xl') Kaden's Graduation Party!
            div(class='grid grid-cols-1 md:grid-cols-2 gap-6')
              div(class='flex items-center gap-x-4 md:mx-auto')
                svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
                  path(
                    fill='currentColor'
                    d='M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053t-.354-.132t-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075T9 4.163t.278.025t.257.075L15 6.177l3.902-1.509q.21-.083.401-.053t.354.132t.252.274q.091.173.091.396v12.259q0 .284-.159.495t-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025t-.254-.075m.015-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z'
                  )

                p(class='text-lg text-gray-600')
                  | 5526 S Newton Ave
                  br
                  | Springfield, MO 65810

              div(class='flex items-center gap-x-4 md:mx-auto')
                svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
                  path(
                    fill='currentColor'
                    d='M14.935 16.223L11.5 12.788V7.923h1v4.464l3.123 3.123zM11.5 6V4h1v2zm6.5 6.5v-1h2v1zM11.5 20v-2h1v2zM4 12.5v-1h2v1zm8.003 8.5q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.708-3.51t1.924-2.859t2.856-1.925T11.997 3t3.51.708t2.859 1.924t1.925 2.856t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8'
                  )

                p(class='text-lg text-gray-600')
                  | June 1st
                  br
                  | 1:00 PM - 5:00 PM

              div(class='flex items-center gap-x-4 md:mx-auto md:col-span-2')
                svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
                  path(
                    fill='currentColor'
                    d='M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z'
                  )

                p(class='text-lg leading-8 text-gray-600')
                  | RSVP to Sarah at #[a(class='underline' href='tel:812-827-9393') 812-827-9393]

            //- div(class='mt-10 flex items-center gap-x-4 justify-center text-gray-600')

            //-   a(
            //-     href='#'
            //-     class='rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm px-3.5 py-2.5 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            //-   ) Get started
            //-   a(href='#' class='text-sm font-semibold leading-6 text-gray-900')
            //-     | Learn more
            //-     span(aria-hidden='true') →

    div(class='bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2')
      img(class='object-cover object-top aspect-[3/2] lg:aspect-auto lg:h-full lg:w-full' src='/kaden.jpg' alt='')

  //- Hotels
  div(class='mx-auto py-10 px-6 lg:px-8 bg-gray-100')
    div(class='mx-auto max-w-4xl text-center')
      p(class='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl') Hotels

    div(
      class='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4'
    )
      div(class='rounded-3xl overflow-hidden bg-white ring-1 ring-gray-200')
        img(src='/holiday-inn-express.jpg' class='w-full aspect-video object-cover object-center')
        div(class='p-8 space-y-4')
          h2(class='text-lg font-semibold leading-8 text-gray-900') Holiday Inn Express

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053t-.354-.132t-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075T9 4.163t.278.025t.257.075L15 6.177l3.902-1.509q.21-.083.401-.053t.354.132t.252.274q.091.173.091.396v12.259q0 .284-.159.495t-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025t-.254-.075m.015-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z'
              )

            p(class='text-gray-600')
              | 310 E Monastery St
              br
              | Springfield, MO 65810

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z'
              )

            p(class='text-gray-600')
              a(href='tel:+14178878500') 417-887-8500

      div(class='rounded-3xl overflow-hidden bg-white ring-1 ring-gray-200')
        img(src='/homewood-suites-by-hilton.jpg' class='w-full aspect-video object-cover object-top')
        div(class='p-8 space-y-4')
          h2(class='text-lg font-semibold leading-8 text-gray-900') Homewood Suites By Hilton

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053t-.354-.132t-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075T9 4.163t.278.025t.257.075L15 6.177l3.902-1.509q.21-.083.401-.053t.354.132t.252.274q.091.173.091.396v12.259q0 .284-.159.495t-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025t-.254-.075m.015-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z'
              )

            p(class='text-gray-600')
              | 4340 S National Ave
              br
              | Springfield, MO 65810

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z'
              )

            p(class='text-gray-600')
              a(href='tel:+14175011525') 417-501-1525

      div(class='rounded-3xl overflow-hidden bg-white ring-1 ring-gray-200')
        img(src='/hilton-garden-inn.jpg' class='w-full aspect-video object-cover object-top')
        div(class='p-8 space-y-4')
          h2(class='text-lg font-semibold leading-8 text-gray-900') Hilton Garden Inn

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053t-.354-.132t-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075T9 4.163t.278.025t.257.075L15 6.177l3.902-1.509q.21-.083.401-.053t.354.132t.252.274q.091.173.091.396v12.259q0 .284-.159.495t-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025t-.254-.075m.015-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z'
              )

            p(class='text-gray-600')
              | 4155 S Nature Center Way
              br
              | Springfield, MO 65804

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z'
              )

            p(class='text-gray-600')
              a(href='tel:+14178758800') 417-875-8800

      div(class='rounded-3xl overflow-hidden bg-white ring-1 ring-gray-200')
        img(src='/towneplace-suites.jpg' class='w-full aspect-video object-cover object-top')
        div(class='p-8 space-y-4')
          h2(class='text-lg font-semibold leading-8 text-gray-900') TownePlace Suites

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M14.485 19.737L9 17.823l-3.902 1.509q-.21.083-.401.053t-.354-.132t-.252-.274Q4 18.806 4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.345q.124-.05.257-.075T9 4.163t.278.025t.257.075L15 6.177l3.902-1.509q.21-.083.401-.053t.354.132t.252.274q.091.173.091.396v12.259q0 .284-.159.495t-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.016-.26.016t-.26-.025t-.254-.075m.015-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z'
              )

            p(class='text-gray-600')
              | 2009 S National Ave
              br
              | Springfield, MO 65804

          div(class='flex items-center gap-x-4')
            svg(xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24')
              path(
                fill='currentColor'
                d='M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z'
              )

            p(class='text-gray-600')
              a(href='tel:+14178818118') 417-881-8118

  //- Venmo
  div(class='relative isolate')
    svg(
      class='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
      aria-hidden='true'
    )
      defs
        pattern#83fd4e5a-9d52-42fc-97b6-718e5d7ee527(
          width='200'
          height='200'
          x='50%'
          y='-1'
          patternUnits='userSpaceOnUse'
        )
          path(d='M100 200V.5M.5 .5H200' fill='none')
      svg(x='50%' y='-1' class='overflow-visible fill-gray-50')
        path(
          d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
          stroke-width='0'
        )
      rect(width='100%' height='100%' stroke-width='0' fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)')
    div(class='mx-auto max-w-7xl px-6 py-4 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16')
      div(class='mx-auto max-w-2xl lg:mx-0 lg:flex-auto')
        h1(class='mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900') If you cannot attend but wish to send Kaden a gift please send to...

      div(class='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow')
        svg(viewBox='0 0 366 729' role='img' class='mx-auto max-w-full drop-shadow-xl w-[22.875rem]')
          title App screenshot
          defs
            clipPath#2ade4387-9c63-4fc4-b754-10e687a0d332
              rect(width='316' height='684' rx='36')
          path(
            fill='#4B5563'
            d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
          )
          path(
            fill='#343E4E'
            d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
          )
          foreignObject(
            width='316'
            height='684'
            transform='translate(24 24)'
            clip-path='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'
          )
            a(href='https://venmo.com/u/Sarah-Kraft-27' target='_blank' rel='noopener noreferrer')
              img(src='/sarah-venmo.jpg' alt='')
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

useSeoMeta({
  robots: {
    noindex: true,
    nofollow: true,
  },
})
</script>
