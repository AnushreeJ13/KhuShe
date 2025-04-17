// This would be part of your initial welcome scenario
scenario.beginDialog("age_classification");

// In the age_classification dialog
botContext.setCustomProperty("age_group", "unknown"); // Default value

if (age < 20) {
    botContext.setCustomProperty("age_group", "teen");
    return scenario.next("teen_healthcare_scenarios");
} else if (age >= 20 && age <= 35) {
    botContext.setCustomProperty("age_group", "young_adult");
    return scenario.next("young_adult_healthcare_scenarios");
} else if (age >= 36 && age <= 50) {
    botContext.setCustomProperty("age_group", "middle_age");
    return scenario.next("middle_age_healthcare_scenarios");
} else {
    botContext.setCustomProperty("age_group", "senior");
    return scenario.next("senior_healthcare_scenarios");
}