<script lang="ts">
	import EventCard from "./EventCard.svelte";

	type GricEvents = {
		eventName: string;
		eventTime: string;
		eventDate: string;
		eventDescription: string;
		eventType: string;
	};

	const events: GricEvents[] = [
		{
			eventName: "Youth Basketball",
			eventDate: "Every Friday",
			eventTime: "9:00pm - 11:00pm",
			eventDescription: "We run basketball for the youth every Friday. Come out and join us",
			eventType: "recurring"
		},
		{
			eventName: "Youth Basketball",
			eventDate: "Every Friday",
			eventTime: "9:00pm - 11:00pm",
			eventDescription: "Basketball for the youth.",
			eventType: "recurring"
		}
	];
</script>

{#each events as { eventName, eventDescription, eventTime, eventDate, eventType }}
	<EventCard
		{eventName}
		{eventDescription}
		{eventDate}
		{eventTime}
		eventPic="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>
{/each}
