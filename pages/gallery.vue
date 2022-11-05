<template>
  <div>
    <!-- Gallery itself -->
    <div v-if="GD" class="w-screen">
      <div class="w-full" v-for="(rowData, index) in GD">
        <div class="flex flex-wrap gap-8 mx-10 my-10">
          <div class="flex justify-center w-50 h-50" v-for="imageData in rowData">
            <NuxtImg :src="imageData.src" :alt="imageData.alt" quality="25" loading="lazy"
              style="width: 12.5rem; height: 12.5rem; max-width: 12.5rem; max-height: 12.5rem; object-fit: scale-down"
              @click="() => {
                modalData.imageData = imageData;
                modalData.enabled = !modalData.enabled;
              }" />
          </div>
        </div>
        <hr class="border border-2 border-gray-600" v-if="galleryData.length !== index + 1" />
      </div>
    </div>

    <!-- Modal -->
    <TransitionRoot appear :show="modalData.enabled" as="template">
      <Dialog as="div" :open="modalData.enabled" @close="(s) => modalData.enabled = s" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-70" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
              leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-700">
                <div class="container flex content-center align-baseline">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 dark:text-light-600">
                    Image
                  </DialogTitle>
                </div>
                <div class="mt-2">
                  <div class="w-50 h-50">
                    <NuxtImg :src="modalData.imageData?.src" :alt="modalData.imageData?.src" :quality="100" />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import galleryData from "~/public/data/gallery.json";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue';

type ImageObject = {
  src: string;
  alt?: string;
  tooltip?: string;
};

const GD = galleryData as ImageObject[][];

const modalData = useState(() => ({
  enabled: false,
  imageData: {},
} as {
  enabled: boolean;
  imageData?: ImageObject;
}));
</script>
