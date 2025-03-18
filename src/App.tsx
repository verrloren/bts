import { LandmarkComponent } from "@/features/landmarks"
import { InfoComponent } from "./features/info";
import { TimeStampsComponent } from "./features/timestamps";


function App() {
  return (
		<main className="relative flex w-full min-h-screen gap-8 px-8 pt-8">

				<div className="w-1/3">
					<LandmarkComponent />
				</div>

				<div className="flex flex-col items-center justify-center w-2/3 gap-8">
					<TimeStampsComponent />
					<InfoComponent />
				</div>
		</main>
  )
}

export default App