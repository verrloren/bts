import { MenuList, MenuListItem, Separator, Window, WindowContent, WindowHeader } from "react95"


export function TimeStampsComponent() {
	return (
		<Window className="w-full">
		<WindowHeader>Time Stamps</WindowHeader>
		<WindowContent className="flex flex-col" >
			<MenuList>
				<MenuListItem>21:08 Tbilisi</MenuListItem>
				<Separator />
				<MenuListItem>18:30 Moscow</MenuListItem>
			</MenuList>
		</WindowContent>
	</Window>
	)
}
