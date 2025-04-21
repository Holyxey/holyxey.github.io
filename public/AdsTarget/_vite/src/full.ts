import { renderBenefits } from "../views/tariffs/benefits";
import { renderTariffs } from "../views/tariffs/tariffs";
import { renderStaff } from "../views/staff/staff";
import { renderPartners } from "../views/partners/partners";
import { renderCases } from "../views/cases/cases";
import { socialsNodeRender } from "./tilda_form_socials";

document.addEventListener("DOMContentLoaded", () => {
	renderTariffs();
	renderBenefits();
	renderPartners();
	renderStaff();
	renderCases();
	socialsNodeRender();
});
