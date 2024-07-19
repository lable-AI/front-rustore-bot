import {Container, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {items} from "../../../other/routes";
import React from "react";
import {usePathname} from "next/navigation";
import {InPageNavItem} from "./item/inPageNavItem";

export function InPageNav({}) {
	const pathname = usePathname();

	return (
		<Container>
			<Stack direction="row" spacing={2} sx={{
				paddingBottom: '64px'
			}}>
				{
					items.map((item) => {
						const active = item.path ? (pathname === item.path) : false;

						return (
							<InPageNavItem key={item.title}
										   active={active}
										   {...item}/>
						);
					})
				}
			</Stack>
		</Container>
	)
}