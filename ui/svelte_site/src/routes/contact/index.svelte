<div class="grid grid-cols-2 py-5 px-10">
	<div class="h-full sm:w-full ">
		<img
			loading="lazy"
			class="h-full w-full object-cover"
			alt="contact us"
			src="https://images.takeshape.io/1f1d0876-be74-4b33-99c8-6ac93f1d70db/dev/4468e4af-526e-4ed6-a0c1-a0dc7673cef3/nicolo-di-giovanni-535450-unsplash.png?auto=compress%2Cformat&h=630&w=1200"
		/>
	</div>
	<div class="px-10">
		<div class="w-full max-w-lg">
			<form action="/api/contact" method="POST">
				<div class="flex flex-wrap -mx-3 ">
					<div class="w-full md:w-1/2 px-3 mb-6 sm:mb-0 md:mb-6">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-first-name"
						>
							First Name
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-first-name"
							name="firstname"
							type="text"
						/>
					</div>
					<div class="w-full md:w-1/2 px-3 mb-6 sm:mb-0 md:mb-6">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-last-name"
						>
							Last Name
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							name="lastname"
							type="text"
						/>
					</div>
					<div class="w-full  px-3 mb-6 sm:mb-0 md:mb-6">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-email"
						>
							Email
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-email"
							name="email"
							type="text"
						/>
					</div>
					<div class="w-full px-3 mb-6 sm:mb-0 md:mb-6">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-email"
						>
							Message
						</label>
						<textarea
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-email"
							name="message"
							rows="4"
							cols="50"
						/>
					</div>
					<div class=" w-full px-3 text-right ">
						<button
							type="button"
							class="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
