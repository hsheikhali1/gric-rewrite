<script lang="ts">
	console.log("something");

	export let newsTitle: string;
	export let postDate: string;
	export let newsType: string;
	export let authorImage: {
		url: string;
		alt: string;
	};
	export let authorName: string;
	export let href: string;
</script>

<article
	class="rounded-lg border border-gray-100 bg-white p-6 shadow-md"
>
	<div class="mb-5 flex items-center justify-between text-gray-500">
		<span
			class="bg-white text-emerald-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium"
		>
			<svg
				class="mr-1 h-3 w-3"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
				></path></svg
			>
			{newsType}
		</span>
		<span class="text-sm">{postDate}</span>
	</div>
	<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">
		<a href={href}>{newsTitle}</a>
	</h2>
	<p class="mb-5 font-light text-gray-400 text-gray-500">
		Static websites are now used to bootstrap lots of websites and are becoming the basis for a
		variety of tools that even influence both web designers and developers influence both web
		designers and developers.
	</p>
	<div class="flex items-center justify-between">
		<div class="flex items-center space-x-4">
			<img
				class="h-7 w-7 rounded-full"
				src={authorImage.url}
				alt={authorImage.alt}
			/>
			<span class="font-medium text-black">{authorName}</span>
		</div>
		<a
			href={href}
			class="text-emerald-500 inline-flex items-center font-medium hover:underline"
		>
			Read more
			<svg
				class="ml-2 h-4 w-4"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path></svg
			>
		</a>
	</div>
</article>
