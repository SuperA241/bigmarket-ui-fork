<script lang="ts">
	export let currentStage = 1;
	export let currentStageStart = 0;

	const stages = [1, 2, 3, 4, 5, 6];

	function getStageClass(stage: number) {
		if (stage < currentStage) return 'bg-success-500';
		if (stage === currentStage) return 'bg-warning-500 animate-pulse';
		return 'bg-gray-300';
	}
</script>

<div class="w-full rounded-lg bg-gray-1000 p-4 text-white shadow-lg">
	<div class="mb-2 text-center text-lg font-semibold">Token Sale Progress</div>

	<!-- Progress bar container -->
	<div class="relative my-5 flex h-10 w-full items-center rounded-lg bg-transparent">
		<!-- Progress track -->
		<div class="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gray-500"></div>

		<!-- Stages -->
		{#each stages as stage}
			<div class="relative flex w-1/6 flex-col items-center">
				<!-- Circular indicator -->
				<div class={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-xs font-bold ${getStageClass(stage)}`}>
					{stage}
				</div>

				<!-- Stage labels -->
				<div class="mt-2 text-center text-xs">
					{stage === currentStage ? `Started at block ${currentStageStart}` : `Stage ${stage}`}
				</div>
			</div>
		{/each}
	</div>
</div>
