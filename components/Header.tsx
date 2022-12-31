import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	SearchIcon,
	ShoppingBagIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	const session = false;

	return (
		<header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
			<div className="flex items-center justify-center md:w-1/5">
				<Link href="/">
					<div className="realtive  h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
						<Image
							// src="https://instagram.fbdo1-1.fna.fbcdn.net/v/t51.2885-15/321872267_1029307441794025_477004283151965997_n.jpg?stp=dst-jpg_e35&amp;_nc_ht=instagram.fbdo1-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=9bhzELkMysAAX_nTkCP&amp;edm=ALQROFkBAAAA&amp;ccb=7-5&amp;ig_cache_key=MzAwMDY5NDg1MTI0NDA3MjU0MA%3D%3D.2-ccb7-5&amp;oh=00_AfBQjwMTwhWZEvkfw4NDueFKoq25t4YHy-NlzE1hSNDf_A&amp;oe=63ACEC06&amp;_nc_sid=30a2ef"
							src="https://rb.gy/vsvv2o"
							alt=""
							width="60"
							height="60"
						/>
					</div>
				</Link>
			</div>

			<div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
				<a className="headerLink">Product</a>
				<a className="headerLink">Explore</a>
				<a className="headerLink">Support</a>
				<a className="headerLink">Business</a>
			</div>

			<div className="flex items-center justify-center gap-x-4 md:w-1/5">
				<SearchIcon className="headerIcon" />
				<Link href="/checkout">
					<div className="relative cursor-pointer">
						<span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
							5
						</span>
						<ShoppingBagIcon className="headerIcon" />
					</div>
				</Link>

				{session ? (
					<Image
						src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
						alt=""
						className="cursor-pointer rounded-full"
						width={34}
						height={34}
						// onClick={() => signOut()}
					/>
				) : (
					<UserIcon
						className="headerIcon"
						// onClick={() => signIn()}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
