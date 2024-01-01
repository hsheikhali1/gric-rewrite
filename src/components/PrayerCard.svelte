<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import Clock from "$lib/components/icons/Clock.astro";
	import type { PrayerTimeType } from "$lib/types";

	export let prayerTimes: PrayerTimeType[];

	const activeClasses = "text-white bg-[#1AA599] shadow-md";

	function getNextPrayerTime(prayerTimes: string[]) {
		const now = new Date();

		// Iterate through the array of prayer times
		for (const prayerTime of prayerTimes) {
			// Convert the prayer time string to a Date object
			const [hours, minutes] = prayerTime.split(":");
			const prayerDate = new Date();
			prayerDate.setHours(Number(hours), Number(minutes), 0, 0);

			// Check if the prayer time is in the future
			if (prayerDate > now) {
				return prayerTime;
			}
		}

		// If all prayer times have passed, return the first prayer time of the next day
		return prayerTimes[0];
	}

	const prayerTimeArray = prayerTimes?.map((time) => time.currentPrayerTime);
	const nextPrayerTime = getNextPrayerTime(prayerTimeArray as string[]);
</script>

<div class="col-span-8 grid">
	<div class="flex flex-col bg-white">
		<div class="rounded-md border border-gray-300 p-8">
			<div class="flex justify-between">
				<span class="mb-2 text-lg font-bold text-[#1AA599]">Salah</span>
				<span class="mb-2 text-lg font-bold text-[#1AA599]">Begins</span>
			</div>
			<div class="flex flex-col space-y-4">
				{#each prayerTimes as time}
					<div
						class={twMerge(
							"flex flex-row justify-between rounded-lg border border-[#E6E6E6] p-4",
							nextPrayerTime === time.currentPrayerTime && activeClasses
						)}
					>
						<div class="flex flex-row items-center space-x-2">
							<svg
								class="h-6 w-6"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
							<span class="block text-lg font-bold">{time.prayerName}</span>
						</div>
						<span class="block text-lg font-bold">{time.prayerTime}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
