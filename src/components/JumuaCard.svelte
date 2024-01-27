<script lang="ts">
	export let time: string;
</script>

<div class="grid w-full rounded-md border border-gray-300 bg-[#fcfcff] p-8 md:col-span-4">
	<div class="flex flex-col justify-center space-y-4">
		<div class="flex flex-col items-center space-y-4">
			<h3 class="block text-4xl font-bold">Imam Abdul Rahman</h3>
			<div class="h-[150px] w-[150px] rounded-full">
				<img
					class="h-[150px] w-[150px] rounded-full object-cover"
					src="https://plus.unsplash.com/premium_photo-1677697355460-352eb7e4f2bf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="imam"
				/>
			</div>
			<span>Resident Imam</span>
		</div>
		<div class="mb-4 rounded-md border border-gray-300 p-8">
			<span class="mb-4 block text-center text-2xl font-bold text-[#1da599]"
				>Jumua khutba begins at</span
			>
			<div class="rounded-md bg-[#212830] p-6 text-center text-2xl font-bold text-[#ffc265]">
				{time} pm
			</div>
		</div>
	</div>
</div>
