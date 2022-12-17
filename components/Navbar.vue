<template>
  <div>
    <Disclosure as="nav" class="dark: bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="block w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="block w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/">
                <NuxtImg class="block h-8 w-auto lg:hidden" src="/icon.png" quality="50" alt="logo" />
                <NuxtImg class="hidden h-8 w-auto lg:block" src="/icon.png" quality="50" alt="logo" />
              </NuxtLink>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href"
                  :class="[item.current() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium decoration-none']"
                  :aria-current="item.current() ? 'page' : undefined">{{ item.name }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="decoration-none">
            <DisclosureButton as="div" :class="[item.current() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current() ? 'page' : undefined">
              {{ item.name }}
            </DisclosureButton>
          </NuxtLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const route = useRoute();
const isActive = (href: string) => href.replace(/\/$/, "") === route.path.replace(/\/$/, "");

const navigation = [
  { name: 'Home', href: "/", enabled: true, current: () => isActive("/") },
  { name: 'Gallery', href: '/gallery', enabled: true, current: () => isActive("/gallery") },
]
</script>