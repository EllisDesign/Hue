// Component
export default function Location() {
	return (
		<section className="page__commercial__location">
			<div className="wrap--wide">
				<div className="two-col">
					<div className="left">
						<p>Port Moody, BC</p>

						<p className="text--xsm">
							Located in the heart of Port Moody, hue offers an easy and bridgeless commute to Vancouver with quick
							access to urban centres such as Port Coquitliam and Burnaby. Just steps away from the St. Johns &
							Douglas street bus stop with a 6-minute route to Moody Centre SkyTrain Station and access to the
							Evergreen line.
						</p>

						<div className="legend">
							<div>
								<span className="icon evergreen"></span>
								<span className="label">Evergreen Line</span>
							</div>

							<div>
								<span className="icon expo"></span>
								<span className="label">Expo Line</span>
							</div>

							<div>
								<span className="icon future"></span>
								<span className="label">Future Development</span>
							</div>
						</div>

						<ul className="bottom">
							<li>
								<p>
									<strong>Woodland Park</strong>
									<br />
									1,596 condo units
									<br />
									325 rental units
								</p>
							</li>
							<li>
								<p>
									<strong>Westport Village</strong>
									<br />
									Residential Mixed-Use
									<br />
									725,999 SF+ of Floor Area
								</p>
							</li>
						</ul>
					</div>

					<div className="right">
						<img src="/img/commercial/big-map.svg" />
					</div>
				</div>
			</div>
		</section>
	)
}
