<script lang="ts">
	export let time: string;
</script>

<div class="grid w-full rounded-md border border-gray-300 bg-[#fcfcff] p-8 md:col-span-4">
	<h2 class="text-center text-2xl font-bold">Some Text</h2>
	<div class="flex flex-col justify-center space-y-4">
		<div class="flex flex-col items-center space-y-4">
			<h3 class="block text-4xl font-bold">NAME OF IMAM</h3>
			<div class="h-[150px] w-[150px] rounded-full bg-[#1da570]"></div>
			<span>Resident Imam</span>
		</div>
		<div class="mb-4 rounded-md border border-gray-300 p-8">
			<span class="mb-4 block text-center text-2xl font-bold text-[#1da599]"
				>Jumua khutba begins at</span
			>
			<div class="rounded-md bg-[#212830] p-6 text-center text-2xl font-bold text-[#ffc265]">
				{time}
			</div>
		</div>
	</div>
</div>
