// Store
import { CDN } from 'store/constants'

// Component
export default function SellingPoints() {
	return (
		<section className="page__commercial__selling-points">
			<div className="wrap--wide">
				<div className="blocks">
					<div className="block">
						<div className="left">
							<span className="title">High Exposure Location</span>
							<span className="desc">Exposure to 90,000 vehicles per day</span>
						</div>
						<div className="right">
							<img src={`${CDN}/img/commercial/3213232221.jpg`} />
						</div>
					</div>

					<div className="block">
						<div className="left">
							<span className="title">Access to Rapid Transit</span>
							<span className="desc">39,500 passengers per day </span>
						</div>
						<div className="right">
							<img src={`${CDN}/img/commercial/moody_centre_station1.jpg`} />
						</div>
					</div>

					<div className="block">
						<div className="left">
							<span className="title">Prominent Signage Opportunity</span>
							<span className="desc">East and west elevations</span>
						</div>
						<div className="right">
							<img src={`${CDN}/img/commercial/3213121.jpg`} />
						</div>
					</div>

					<div className="block">
						<div className="left">
							<span className="title">Dedicated Commercial Parking</span>
							<span className="desc">35 commercial parking stalls</span>
						</div>
						<div className="right">
							<img src={`${CDN}/img/commercial/21050_EV-C03_5K031.jpg`} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
