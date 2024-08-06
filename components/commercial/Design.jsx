// Store
import { CDN } from 'store/constants'

// Component
export default function Design() {
	return (
		<section className="page__commercial__design">
			<div className="wrap--wide">
				<div className="two-col">
					<div className="left">
						<p>Contemporary Design</p>

						<p className="text--xsm">
							The contemporary design expression will directly engage the public through the play of light, colour,
							and art. A masonry base extends the full length of the development on both the east and north
							commercial elevations.
						</p>
					</div>

					<div className="right">
						<img src={`${CDN}/img/renderings/exteriors/21050_FacadeCloseupB03_st(1.66)_5K04.jpg`} />
					</div>
				</div>
			</div>
		</section>
	)
}
