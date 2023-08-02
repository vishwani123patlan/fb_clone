import { useSession } from 'next-auth/react';

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div calssName="p-2 mt-2 max-w-[6000pc] xl:min-w[300px]">
      <SidebarRow src={session.user.image} title={session.user.name}/>
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Market Place" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Event" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  )
}

export default Sidebar