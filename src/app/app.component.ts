/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbIcons } from '@nebular/theme';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('health',
    this.getLocalIcons())
  }
  
  /* 'medicines': '<img xmlns="http://www.w3.org/2000/svg" src="../../../../assets/icons/default/icon_medikamente.svg" width="25px">' */

  getLocalIcons(): NbIcons {
    var localIcons : NbIcons = {};
    Object.keys(this.icons).forEach(name => {
      localIcons[name] = '<img xmlns="http://www.w3.org/2000/svg" src="../assets/svg-icons/' + this.icons[name] + '" width="20px"">';
    });
    /* return localIcons; */
    return localIcons
  }


  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }


  private readonly icons: {
    [key: string]: string
  } = {
    "default": "icon_default.svg",
    "logo": "logo_ms.svg",
    "data-protection": "icon_data_protection.svg",
    "diary": "icon_diary.svg",
    "scan-barcode": "icon_scan-barcode.svg",
    "novelties": "icon_novelties.svg",
    "alarm": "icon_alarm.svg",
    "home": "icon_home.svg",
    "forward": "icon_forward.svg",
    "glossary": "icon_glossary.svg",
    "arrow_up": "icon_arrow_up.svg",
    "date": "icon_date.svg",
    "imprint": "icon_imprint.svg",
    "profil": "icon_profil.svg",
    "calendar": "icon_calendar.svg",
    "mood-good": "icon_mood-good.svg",
    "findings": "icon_findings.svg",
    "time": "icon_time.svg",
    "questionnaire": "icon_questionnaire.svg",
    "news": "icon_news.svg",
    "not-taken": "icon_not-taken.svg",
    "export": "icon_export.svg",
    "accessibility-settings": "icon_accessibility_settings.svg",
    "marker-red": "icon_marker-red.svg",
    "entry_medicine": "icon_entry_medicine.svg",
    "partially-taken": "icon_partially-taken.svg",
    "back": "icon_back.svg",
    "contrast": "icon_contrast.svg",
    "entry_note": "icon_entry_note.svg",
    "filter": "icon_filter.svg",
    "back_ov": "icon_back_ov.svg",
    "mood-middle": "icon_mood-middle.svg",
    "medicine-not": "icon_medicine-not.svg",
    "all-taken": "icon_all-taken.svg",
    "minus": "icon_minus.svg",
    "mood-bad": "icon_mood-bad.svg",
    "night": "icon_night.svg",
    "import": "icon_import.svg",
    "medicines": "icon_medicines.svg",
    "help": "icon_help.svg",
    "quality-target": "icon_quality-target.svg",
    "marker-green": "icon_marker-green.svg",
    "vital-signs": "icon_vital_signs.svg",
    "arrow_down": "icon_arrow_down.svg",
    "calendar_month": "icon_calendar_month.svg",
    "login": "icon_login.svg",
    "specialist-information": "icon_specialist-information.svg",
    "documents": "icon_documents.svg",
    "medicine-half": "icon_medicine-half.svg",
    "laboratory-results": "icon_laboratory-results.svg",
    "doctors-letter": "icon_doctors-letter.svg",
    "font": "icon_font.svg",
    "calendar_week": "icon_calendar_week.svg",
    "studies": "icon_studies.svg",
    "plus": "icon_plus.svg",
    "medical-history": "icon_medical_history.svg",
    "chart": "icon_chart.svg",
    "midday": "icon_midday.svg",
    "email-to-doctor": "icon_email-to-doctor.svg",
    "doctors-nearby": "icon_doctors-nearby.svg",
    "info-flyout": "icon_info_flyout.svg",
    "entry_diary": "icon_entry_diary.svg",
    "emergency-call": "icon_emergency-call.svg",
    "sitemap": "icon_sitemap.svg",
    "simple-language": "icon_simple_language.svg",
    "emergency": "icon_emergency.svg",
    "forward_ov": "icon_forward_ov.svg",
    "marker-orange": "icon_marker-orange.svg",
    "new-medicine": "icon_new_medicine.svg",
    "forward_dis": "icon_forward_dis.svg",
    "note": "icon_note.svg",
    "recipe": "icon_recipe.svg",
    "calendar_day": "icon_calendar_day.svg",
    "morning": "icon_morning.svg",
    "back_dis": "icon_back_dis.svg",
    "digital-patient-file": "icon_digital-patient-file.svg",
    "evening": "icon_evening.svg",
    "document": "icon_document.svg",
    "search": "icon_search.svg",
    "medicine-whole": "icon_medicine-whole.svg",
    "quality-indicator": "icon_quality-indicator.svg",
    "google": "icon_google.svg"
  }





}
