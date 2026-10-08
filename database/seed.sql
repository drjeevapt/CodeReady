-- ==============================================================================
-- CodeReady - Seed Cases SQL
-- ==============================================================================

INSERT INTO public.cases (
    id, case_number, title, specialty, difficulty, skill,
    clinical_documentation, question, options, correct_answer, code,
    explanation, coding_concept, common_mistake, learning_objective,
    target_time_seconds, reference, code_set_year, status, review_status
) VALUES
(
    '00000000-0000-0000-0000-000000000001',
    1,
    'Knee Osteoarthritis: Diagnosis vs. Symptom',
    'Orthopedics',
    'Beginner',
    'Diagnosis Selection',
    'PATIENT CLINICAL NOTE\nPatient: 67-year-old female\nSetting: Outpatient Orthopedic Clinic\n\nSUBJECTIVE:\nPatient reports a 6-month history of worsening right knee pain, stiffness in the morning lasting ~20 minutes, and difficulty negotiating stairs. Denies recent acute injury or trauma.\n\nOBJECTIVE:\nRight Knee Exam: Mild joint effusion. Tenderness along the medial joint line. Active ROM 0 to 110 degrees with crepitus. Stable to varus/valgus stress. Weight-bearing radiographs demonstrate medial compartment joint space narrowing, subchondral sclerosis, and marginal osteophytes consistent with degenerative changes.\n\nASSESSMENT:\nPrimary osteoarthritis, right knee.\n\nPLAN:\nContinue conservative management including home exercise program and physical therapy 2x weekly. Prescribed topical NSAID. Follow up in 6 weeks.',
    'Based on the clinical documentation, what is the single most accurate and supported ICD-10-CM coding decision for this encounter?',
    '[
        {"id": "opt_a", "label": "A", "text": "M25.561 — Pain in right knee", "codeSnippet": "M25.561"},
        {"id": "opt_b", "label": "B", "text": "M17.11 — Unilateral primary osteoarthritis, right knee", "codeSnippet": "M17.11"},
        {"id": "opt_c", "label": "C", "text": "M17.0 — Bilateral primary osteoarthritis of knee", "codeSnippet": "M17.0"},
        {"id": "opt_d", "label": "D", "text": "M17.11 (Primary osteoarthritis, right knee) AND M25.561 (Pain in right knee)", "codeSnippet": "M17.11, M25.561"}
    ]'::jsonb,
    'opt_b',
    'M17.11',
    'According to ICD-10-CM Official Guidelines Section I.B.4 & I.B.5, signs and symptoms that are routinely associated with a disease process (such as knee pain in knee osteoarthritis) should NOT be assigned as additional codes when a definitive diagnosis has been established by the physician. M17.11 captures both the definitive etiology (unilateral primary osteoarthritis) and anatomical laterality (right knee).',
    'Definitive Diagnosis vs. Associated Symptom (ICD-10-CM Guideline I.B.4/5)',
    'Coding both the osteoarthritis and the symptom of knee pain (M25.561), or failing to select the code that incorporates laterality.',
    'Differentiate between definitive diagnoses and inherent symptoms, avoiding redundant symptom coding while assigning specific laterality.',
    90,
    'ICD-10-CM Official Guidelines for Coding and Reporting FY 2025/2026, Section I.B.4 & Section I.B.5',
    '2025/2026',
    'Published',
    'Approved'
),
(
    '00000000-0000-0000-0000-000000000002',
    2,
    'Shoulder Pain & ROM: Avoid Premature Diagnosis Inference',
    'Orthopedics',
    'Intermediate',
    'Documentation Interpretation',
    'PATIENT CLINICAL NOTE\nPatient: 52-year-old male\nSetting: Outpatient Orthopedic Clinic\n\nSUBJECTIVE:\nChief Complaint: Left shoulder discomfort and restricted overhead reaching for 3 weeks after lifting heavy equipment. Reports dull aching localized to anterior shoulder.\n\nOBJECTIVE:\nLeft Shoulder Exam: Active flexion 120°, abduction 110° limited by discomfort. Pain with active internal rotation. Passive ROM preserved with mild end-range discomfort. Neer and Hawkins tests equivocal. Plain x-rays negative for acute fracture or calcific tendinitis.\n\nASSESSMENT:\nLeft shoulder pain and decreased range of motion. Ordered outpatient MRI to evaluate rotator cuff integrity.\n\nPLAN:\nRest, avoid overhead lifting. Physical therapy referral for gentle range of motion. Await MRI results before establishing definitive diagnosis.',
    'Which coding choice correctly adheres to documentation boundaries for this encounter?',
    '[
        {"id": "opt_a", "label": "A", "text": "M75.102 — Unspecified rotator cuff tear or rupture of left shoulder, not specified as traumatic", "codeSnippet": "M75.102"},
        {"id": "opt_b", "label": "B", "text": "M75.02 — Adhesive capsulitis of left shoulder", "codeSnippet": "M75.02"},
        {"id": "opt_c", "label": "C", "text": "M25.512 (Pain in left shoulder) and M25.612 (Stiffness of left shoulder, not elsewhere classified)", "codeSnippet": "M25.512, M25.612"},
        {"id": "opt_d", "label": "D", "text": "M75.52 — Bursitis of left shoulder", "codeSnippet": "M75.52"}
    ]'::jsonb,
    'opt_c',
    'M25.512, M25.612',
    'In outpatient coding (ICD-10-CM Guideline IV.H), when a definitive diagnosis has not yet been confirmed by the provider and diagnostic workup (such as MRI) is still pending, the coder MUST code the documented signs and symptoms. A coder must never assume or anticipate a suspected condition.',
    'Code Documented Signs/Symptoms When Definitive Diagnosis is Pending (Guideline IV.H)',
    'Assuming a rotator cuff tear because an MRI was ordered to rule it out.',
    'Do not infer structural pathology from symptoms or pending diagnostic orders alone.',
    90,
    'ICD-10-CM Official Guidelines Section IV.H (Uncertain Diagnosis in Outpatient)',
    '2025/2026',
    'Published',
    'Approved'
),
(
    '00000000-0000-0000-0000-000000000003',
    3,
    'Knee Osteoarthritis: Strict Laterality Assignment',
    'Orthopedics',
    'Beginner',
    'Laterality & Specificity',
    'PATIENT CLINICAL NOTE\nPatient: 71-year-old male\nSetting: Outpatient Orthopedics\n\nSUBJECTIVE:\nPresents for evaluation of chronic left knee pain. Has tried over-the-counter acetaminophen with minimal relief. Right knee remains completely asymptomatic without pain or prior surgeries.\n\nOBJECTIVE:\nLeft Knee: Moderate medial joint line tenderness. Extension full (0°), flexion to 115°. Standing x-rays show left knee medial joint space loss and spurring. Right knee radiograph shows clear joint space and normal anatomy.\n\nASSESSMENT:\nPrimary osteoarthritis, left knee.\n\nPLAN:\nScheduled for intra-articular corticosteroid injection of left knee. Physical therapy prescribed.',
    'Which ICD-10-CM code precisely reports the documented condition with correct laterality?',
    '[
        {"id": "opt_a", "label": "A", "text": "M17.11 — Unilateral primary osteoarthritis, right knee", "codeSnippet": "M17.11"},
        {"id": "opt_b", "label": "B", "text": "M17.12 — Unilateral primary osteoarthritis, left knee", "codeSnippet": "M17.12"},
        {"id": "opt_c", "label": "C", "text": "M17.9 — Osteoarthritis of knee, unspecified", "codeSnippet": "M17.9"},
        {"id": "opt_d", "label": "D", "text": "M17.0 — Bilateral primary osteoarthritis of knee", "codeSnippet": "M17.0"}
    ]'::jsonb,
    'opt_b',
    'M17.12',
    'ICD-10-CM classifies osteoarthritis of the knee with specific digits for laterality: 1 = right, 2 = left, 0 = bilateral, 9 = unspecified. The clinical record explicitly diagnoses unilateral primary osteoarthritis of the left knee (M17.12) with an asymptomatic right knee.',
    'ICD-10-CM Laterality Convention (Guideline I.B.13)',
    'Defaulting to an unspecified code (M17.9) or misidentifying right vs. left digits (1 vs 2).',
    'Consistently identify and apply correct anatomical laterality digits based on physician documentation.',
    60,
    'ICD-10-CM Chapter 13 Tabular List & Guideline I.B.13',
    '2025/2026',
    'Published',
    'Approved'
)
ON CONFLICT (case_number) DO NOTHING;
