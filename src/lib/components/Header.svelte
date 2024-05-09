<script lang="ts">
    export let tabs: string[];
</script>

<header class="inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 tablet:px-6 desktop:px-8">
      <div class="flex flex-1 items-center gap-x-6">
        <button type="button" class="-m-3 p-3 laptop:hidden">
          <span class="sr-only">Open main menu</span>
          <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
        <a href="/" class="hidden laptop:flex laptop:gap-x-11 laptop:text-sm laptop:font-semibold laptop:leading-6 laptop:text-gray-700">Name goes here</a>
      </div>
      <nav class="hidden laptop:flex laptop:gap-x-11 laptop:text-sm laptop:font-semibold laptop:leading-6 laptop:text-gray-700">
        {#each tabs as tab}
            <a href="/{tab.toLocaleLowerCase()}">{tab}</a>
        {/each}
      </nav>
      <div class="flex flex-1 items-center justify-end gap-x-8">
        
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="tablet:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 tablet:max-w-sm tablet:px-6 tablet:ring-1 tablet:ring-gray-900/10">
        <div class="-ml-0.5 flex h-16 items-center gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-2 space-y-2">
            {#each tabs as tab}
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{tab}</a>
            {/each}
        </div>
      </div>
    </div>
  </header>
  
  