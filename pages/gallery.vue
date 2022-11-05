<template>
  <div>
    <!-- Gallery itself -->
    <div class="w-screen">
      <div class="w-full" v-for="(rowData, index) in galleryData">
        <div class="flex flex-wrap gap-8 mx-10 my-10">
          <div class="flex justify-center w-50 h-50" v-for="imageData in rowData">
            <NuxtImg fit="inside" :src="imageData.src" :alt="imageData.alt" quality="25" loading="lazy"
              style="max-width: 12.5rem; max-height: 12.5rem;" @click="() => {
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
                  <NuxtImg :src="modalData.imageData?.src" :alt="modalData.imageData?.src" :quality="100" />
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

const galleryData: ImageObject[][] = [
  [
    {
      src: "/gallery/hayper/IMG_0497_EDITED.png",
      tooltip: "First art of my new main sona ever, edited to add the height",
    },
    {
      src: "/gallery/hayper/hayper_wolf.png",
    },
    {
      src: "/gallery/hayper/WOOOO.png",
      tooltip:
        "My friend comissioned this for me, i added VSC to the computer screen",
    },
    {
      src: "/gallery/hayper/Untitled1831_20220816162333.png",
    },
    {
      src: "/gallery/hayper/com.png",
      tooltip: "Changed moderator's group image",
    },
    {
      src: "/gallery/hayper/WolfMan.png",
    },
    {
      src: "/gallery/hayper/PURPLEE.png",
      tooltip: "*INHALES* PURPLEEEEEEEEEE",
    },
    {
      src: "/gallery/hayper/useruploads_bdd2411b-2ec6-4153-ab40-d7f28a5cf0b7_kofimissions9.png",
      tooltip:
        "I don't know what to say, this is also one of my most favorite art.... it's just...",
    },
    {
      src: "/gallery/hayper/Untitled58_1.png"
    }
  ],
  [
    {
      src: "/gallery/old_hayper/headshot_transparent.png",
      tooltip: "My old main fursona, a black cat",
    },
    {
      src: "/gallery/old_hayper/Untitled1883_20210904174428.png",
    },
    {
      src: "/gallery/old_hayper/Untitled453_20210515144557.png",
    },
    {
      src: "/gallery/old_hayper/sketch-1593639014980.png",
    },
    {
      src: "/gallery/old_hayper/sketch-1593477463861.png",
    },
    {
      src: "/gallery/old_hayper/sketch-1593360442075.png",
    },
    {
      src: "/gallery/old_hayper/Screenshot_20211006-031117_FlipaClip.jpg",
    },
    {
      src: "/gallery/old_hayper/Screenshot_2652.png",
    },
    {
      src: "/gallery/old_hayper/Maid_Hayper.png",
    },
    {
      src: "/gallery/old_hayper/hayper(1).png",
    },
    {
      src: "/gallery/old_hayper/hayper_socc_blep.png",
    },
    {
      src: "/gallery/old_hayper/Hayper_Portrait.png",
    },
    {
      src: "/gallery/old_hayper/haykat.png",
    },
    {
      src: "/gallery/old_hayper/hayden.gif",
    },
    {
      src: "/gallery/old_hayper/Goat.png",
    },
    {
      src: "/gallery/old_hayper/femmaid hayper.png",
    },
    {
      src: "/gallery/old_hayper/20210630_002512.png",
    },
    {
      src: "/gallery/old_hayper/20201031_141531.png",
    },
    {
      src: "/gallery/old_hayper/20201006_230127.jpg",
    },
    {
      src: "/gallery/old_hayper/1837_20220726235537.png",
    },
    {
      src: "/gallery/old_hayper/1037_Sem_Titulo.png",
    },
    {
      src: "/gallery/old_hayper/472_Sem_Titulo-1.jpg",
    },
  ],
  [
    {
      src: "/gallery/other/Untitled56_20220918142849.png",
      tooltip: "Circle in a maid dress",
    },
  ],
];

const modalData = useState(() => ({
  enabled: false,
  imageData: {},
} as {
  enabled: boolean;
  imageData?: ImageObject;
}));
</script>
