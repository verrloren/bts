
import { Button, MenuList, MenuListItem, Separator, Window, WindowContent, WindowHeader } from "react95"


export function LandmarkComponent() {
	return (
			<Window className="w-full">
				<WindowHeader>Landmarks</WindowHeader>
				<WindowContent className="flex flex-col" >
					<MenuList>
						<MenuListItem>Batumi</MenuListItem>
						<Separator />
						<MenuListItem>Batumi</MenuListItem>
					</MenuList>
				<Button className="mt-10">Submit</Button>
				</WindowContent>
			</Window>

	)
}
