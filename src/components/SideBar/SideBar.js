import React from "react";
import styles from "./styles.module.css";

const SideBar = () => {
	return (
		<>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Peliculas de calidad</h4>
				<div className={styles.area_content}>
					<p className={styles.text_area}>
						<span className={styles.color}>Cinecalidad </span>Películas online en
						excelente calidad Bluray 4K 2160p, Full HD 1080p, audio latino, gratis,
						sin registro y toda la información.
					</p>
				</div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Peliculas Destacadas</h4>
				<div className={styles.area_content}></div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Año de estreno</h4>
				<div className={`${styles.area_content} ${styles.grilla}`}>
					<a className={styles.box_year} href="#a">
						2022
					</a>
					<a className={styles.box_year} href="#a">
						2021
					</a>
					<a className={styles.box_year} href="#a">
						2020
					</a>
					<a className={styles.box_year} href="#a">
						2019
					</a>
					<a className={styles.box_year} href="#a">
						2018
					</a>
					<a className={styles.box_year} href="#a">
						2017
					</a>
					<a className={styles.box_year} href="#a">
						2016
					</a>
					<a className={styles.box_year} href="#a">
						2015
					</a>
					<a className={styles.box_year} href="#a">
						2014
					</a>
					<a className={styles.box_year} href="#a">
						2013
					</a>
					<a className={styles.box_year} href="#a">
						2012
					</a>
					<a className={styles.box_year} href="#a">
						2011
					</a>
					<a className={styles.box_year} href="#a">
						2010
					</a>
					<a className={styles.box_year} href="#a">
						2009
					</a>
					<a className={styles.box_year} href="#a">
						2008
					</a>
					<a className={styles.box_year} href="#a">
						2007
					</a>
					<a className={styles.box_year} href="#a">
						2006
					</a>
					<a className={styles.box_year} href="#a">
						2005
					</a>
					<a className={styles.box_year} href="#a">
						2004
					</a>
					<a className={styles.box_year} href="#a">
						2003
					</a>
					<a className={styles.box_year} href="#a">
						2002
					</a>
					<a className={styles.box_year} href="#a">
						2001
					</a>
					<a className={styles.box_year} href="#a">
						2000
					</a>
					<a className={styles.box_year} href="#a">
						1999
					</a>
					<a className={styles.box_year} href="#a">
						1998
					</a>
					<a className={styles.box_year} href="#a">
						1997
					</a>
					<a className={styles.box_year} href="#a">
						1996
					</a>
					<a className={styles.box_year} href="#a">
						1995
					</a>
					<a className={styles.box_year} href="#a">
						1994
					</a>
					<a className={styles.box_year} href="#a">
						1993
					</a>
					<a className={styles.box_year} href="#a">
						1992
					</a>
					<a className={styles.box_year} href="#a">
						1991
					</a>
					<a className={styles.box_year} href="#a">
						1990
					</a>
					<a className={styles.box_year} href="#a">
						1989
					</a>
					<a className={styles.box_year} href="#a">
						1988
					</a>
					<a className={styles.box_year} href="#a">
						1987
					</a>
					<a className={styles.box_year} href="#a">
						1986
					</a>
					<a className={styles.box_year} href="#a">
						1985
					</a>
					<a className={styles.box_year} href="#a">
						1984
					</a>
					<a className={styles.box_year} href="#a">
						1983
					</a>
					<a className={styles.box_year} href="#a">
						1982
					</a>
					<a className={styles.box_year} href="#a">
						1981
					</a>
					<a className={styles.box_year} href="#a">
						1980
					</a>
					<a className={styles.box_year} href="#a">
						1979
					</a>
				</div>
			</div>
			<div className={styles.section}>
				<h4 className={styles.title_area}>Herramientas</h4>
				<div className={styles.area_content}>
					<ul>
						<li>
							<a href="#a">Como descargar películas</a>{" "}
						</li>
						<li>
							<a href="#a">Reproductores para tus películas</a>
						</li>
						<li>
							<a href="#a">Gestores de descarga gratis</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SideBar;
