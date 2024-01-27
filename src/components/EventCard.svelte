<script lang="ts">
	export let eventName: string;
	export let eventDescription: string;
	export let eventTime: string;
	export let eventDate: string;
	export let eventPic: string;
</script>

<div class="h-full rounded-md border-[1px] border-solid border-gray-300 p-6">
	<div class="flex h-full flex-col md:flex-row gap-6">
		<div class="h-full">
			<img class="h-full rounded-xl object-cover" src={eventPic} alt="event" />
		</div>

		<div class="flex h-full w-[82%] flex-col space-y-6">
			<div class="space-y-2">
				<h2 class="text-2xl font-bold">{eventName}</h2>
				<p class="text-lg">{eventDate} - {eventTime}</p>
			</div>
			<p class="text-justify text-xl text-gray-600">{eventDescription}</p>
			<div class="flex h-full">
				<button class="font-base self-end rounded-lg bg-[#256B84] p-4 text-lg text-white"
					>Contact us for more details</button
				>
			</div>
		</div>
	</div>
</div>
