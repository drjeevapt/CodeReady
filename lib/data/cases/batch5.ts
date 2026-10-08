import { Case } from '../../types';

export const batch5Cases: Case[] = [
  {
    id: 'case-081',
    case_number: 81,
    title: 'Periprosthetic Joint Infection: Left Total Knee Arthroplasty',
    specialty: 'Knee',
    body_region: 'Knee',
    difficulty: 'Advanced',
    skill: 'Post-Procedure Scenarios',
    primary_skill: 'Post-Procedure Scenarios',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 70-year-old female
Setting: Orthopedic Inpatient Consultation

SUBJECTIVE:
Underwent elective left total knee arthroplasty 9 months ago. Presents with 2 weeks of progressive left knee throbbing pain, warmth, erythema, and purulent drainage from the inferior aspect of the midline surgical wound. Fevers up to 101.8°F.

OBJECTIVE:
Left Knee Exam: Marked joint effusion, periarticular erythema, tense skin, drainage from sinus tract. Range of motion 15° to 60° with severe pain.
Arthrocentesis Left Knee: Synovial fluid WBC 84,000/mcL with 92% neutrophils. Synovial fluid Gram stain positive for Gram-positive cocci in clusters (Staphylococcus aureus).
X-Rays: Radiolucent lines around tibial and femoral components consistent with septic loosening.

ASSESSMENT:
Infection and inflammatory reaction due to internal left knee joint prosthesis, initial encounter.

PLAN:
Urgent admission for left total knee arthroplasty explantation, antibiotic spacer placement, and IV cefazolin.`,
    question: 'Which ICD-10-CM code reports an infection due to an internal left knee prosthetic joint on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'T84.54XA — Infection and inflammatory reaction due to internal left knee prosthesis, initial encounter', codeSnippet: 'T84.54XA' },
      { id: 'opt_b', label: 'B', text: 'T84.53XA — Infection and inflammatory reaction due to internal right knee prosthesis, initial encounter', codeSnippet: 'T84.53XA' },
      { id: 'opt_c', label: 'C', text: 'M00.062 — Staphylococcal arthritis, left knee', codeSnippet: 'M00.062' },
      { id: 'opt_d', label: 'D', text: 'Z47.1 — Aftercare following joint replacement surgery', codeSnippet: 'Z47.1' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'T84.54XA',
    icd10cm_code: 'T84.54XA',
    code_description: 'Infection and inflammatory reaction due to internal left knee prosthesis, initial encounter',
    explanation: 'Per Official Guidelines I.C.19, prosthetic joint infections are classified under category T84.5- (Infection and inflammatory reaction due to internal joint prosthesis). Code T84.54XA specifies the left knee on initial active encounter. Code M00.- is for native joint septic arthritis, not prosthetic devices.',
    documentation_evidence: 'Assessment: Infection and inflammatory reaction due to internal left knee joint prosthesis, initial encounter.',
    coding_concept: 'Prosthetic Joint Infection (T84.5-) vs Native Joint Infection (M00.-)',
    common_mistake: 'Using native septic arthritis code (M00.062) or wrong laterality character.',
    common_trap: 'Coding native septic arthritis when an artificial prosthetic joint is infected.',
    learning_objective: 'Report periprosthetic joint infections with category T84.5-, specifying prosthetic site, laterality, and encounter phase.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Category T84.5 & Guidelines I.C.19',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['knee', 'infection', 'prosthesis', 'post-procedure', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-082',
    case_number: 82,
    title: 'SLAP Lesion: Superior Glenoid Labral Tear of Right Shoulder',
    specialty: 'Shoulder',
    body_region: 'Shoulder',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 26-year-old male baseball pitcher
Setting: Sports Medicine & Shoulder Service

SUBJECTIVE:
Presents with deep anterior/superior right shoulder pain and mechanical catching during the late cocking and early acceleration phase of throwing for 3 months. Denies shoulder dislocation.

OBJECTIVE:
Right Shoulder Exam: Positive O\'Brien active compression test (pain relieved with forearm supination). Positive crank test and Speed test. Rotator cuff manual muscle testing 5/5.
MR Arthrogram Right Shoulder: Type II SLAP lesion (superior labrum anterior to posterior tear) with detachment of the biceps tendon anchor from the superior glenoid tubercle. Rotator cuff tendons intact without tear.

ASSESSMENT:
SLAP lesion (superior glenoid labrum tear), right shoulder.

PLAN:
Arthroscopic right shoulder SLAP repair (biceps anchor refixation) vs biceps tenodesis.`,
    question: 'Which ICD-10-CM code reports a SLAP lesion / superior glenoid labral tear of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.81 — Other shoulder lesions, right shoulder (includes SLAP tear)', codeSnippet: 'M75.81' },
      { id: 'opt_b', label: 'B', text: 'M75.82 — Other shoulder lesions, left shoulder', codeSnippet: 'M75.82' },
      { id: 'opt_c', label: 'C', text: 'S43.431A — Superior glenoid labrum lesion of right shoulder, initial encounter', codeSnippet: 'S43.431A' },
      { id: 'opt_d', label: 'D', text: 'M75.101 — Unspecified rotator cuff tear of right shoulder', codeSnippet: 'M75.101' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.81',
    icd10cm_code: 'M75.81',
    code_description: 'Other shoulder lesions, right shoulder',
    explanation: 'In the ICD-10-CM Tabular List, non-traumatic SLAP tears and superior glenoid labrum lesions are explicitly indexed to category M75.8- (Other shoulder lesions). The 5th character 1 designates the right shoulder: M75.81.',
    documentation_evidence: 'Assessment: SLAP lesion (superior glenoid labrum tear), right shoulder.',
    coding_concept: 'SLAP Lesion / Superior Glenoid Labral Tear Indexing (M75.8-)',
    common_mistake: 'Using rotator cuff tear code (M75.1) when documentation specifically confirms an isolated glenoid labrum SLAP lesion.',
    common_trap: 'Confusing rotator cuff tears with labral/SLAP lesions.',
    learning_objective: 'Assign M75.81 for superior glenoid labral / SLAP lesions of the right shoulder.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Alphabetic Index & Category M75.8',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'slap-lesion', 'labrum', 'sports-medicine', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-083',
    case_number: 83,
    title: 'Calcific Tendinitis of Right Shoulder Rotator Cuff',
    specialty: 'Shoulder',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 50-year-old female
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with acute-on-chronic excruciating right shoulder pain that woke her from sleep 2 nights ago. Inability to abduct the arm.

OBJECTIVE:
Right Shoulder Exam: Severe point tenderness over the right greater tuberosity and subacromial space. Active abduction limited to 30° due to acute pain. Passive motion guarded.
Radiographs Right Shoulder: Dense, amorphous, homogeneous 1.8 cm calcific deposit within the critical zone of the right supraspinatus tendon consistent with resorptive-phase calcific tendinitis. No glenohumeral joint space narrowing.

ASSESSMENT:
Calcific tendinitis of right shoulder.

PLAN:
Ultrasound-guided calcific deposit barbotage (lavage/needling) and subacromial corticosteroid injection.`,
    question: 'Which ICD-10-CM code reports calcific tendinitis of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.31 — Calcific tendinitis of right shoulder', codeSnippet: 'M75.31' },
      { id: 'opt_b', label: 'B', text: 'M75.32 — Calcific tendinitis of left shoulder', codeSnippet: 'M75.32' },
      { id: 'opt_c', label: 'C', text: 'M75.21 — Bicipital tendinitis, right shoulder', codeSnippet: 'M75.21' },
      { id: 'opt_d', label: 'D', text: 'M25.511 — Pain in right shoulder', codeSnippet: 'M25.511' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.31',
    icd10cm_code: 'M75.31',
    code_description: 'Calcific tendinitis of right shoulder',
    explanation: 'Category M75.3 specifically classifies calcific tendinitis of shoulder. The 5th character 1 designates the right shoulder: M75.31.',
    documentation_evidence: 'Assessment: Calcific tendinitis of right shoulder.',
    coding_concept: 'Calcific Tendinitis Subcategory Specificity (M75.31)',
    common_mistake: 'Using bicipital tendinitis code (M75.21) or unspecified shoulder pain (M25.511).',
    common_trap: 'Mismatched laterality character or selecting generic tendinitis.',
    learning_objective: 'Assign M75.31 for calcific tendinitis of the right shoulder.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'calcific-tendinitis', 'laterality', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-084',
    case_number: 84,
    title: 'Post-Laminectomy Syndrome: Failed Back Surgery Syndrome',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Advanced',
    skill: 'Post-Procedure Scenarios',
    primary_skill: 'Post-Procedure Scenarios',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 56-year-old male
Setting: Interventional Spine & Pain Management

SUBJECTIVE:
Presents with persistent, intractable axial lumbar back pain and bilateral buttock aching 18 months following an L4-L5 laminectomy and discectomy. Pain never resolved after surgery and has progressively worsened.

OBJECTIVE:
Exam: Well-healed lumbar midline surgical scar. Severe axial lumbar stiffness. Straight leg raise negative bilaterally. Lower extremity motor strength 5/5 throughout. Intact deep tendon reflexes.
Lumbar Spine MRI with IV Contrast: Extensive post-surgical epidural fibrosis and scar tissue surrounding the thecal sac at L4-L5 with no recurrent disc herniation. Hardware intact.

ASSESSMENT:
Post-laminectomy syndrome, lumbar region (Failed back surgery syndrome).

PLAN:
Trial of lumbar spinal cord stimulation (SCS) and interdisciplinary pain rehabilitation.`,
    question: 'Which ICD-10-CM code reports post-laminectomy syndrome, not elsewhere classified (failed back surgery syndrome)?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M96.1 — Postlaminectomy syndrome, not elsewhere classified', codeSnippet: 'M96.1' },
      { id: 'opt_b', label: 'B', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
      { id: 'opt_c', label: 'C', text: 'M51.26 — Other intervertebral disc displacement, lumbar region', codeSnippet: 'M51.26' },
      { id: 'opt_d', label: 'D', text: 'G89.28 — Other chronic postprocedural pain', codeSnippet: 'G89.28' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M96.1',
    icd10cm_code: 'M96.1',
    code_description: 'Postlaminectomy syndrome, not elsewhere classified',
    explanation: 'ICD-10-CM code M96.1 is the dedicated post-procedural code for postlaminectomy syndrome (failed back surgery syndrome). Per coding hierarchy, specific postprocedural condition code M96.1 takes precedence over general back pain or disc displacement.',
    documentation_evidence: 'Assessment: Post-laminectomy syndrome, lumbar region (Failed back surgery syndrome).',
    coding_concept: 'Post-Procedural Spine Specificity: Postlaminectomy Syndrome (M96.1)',
    common_mistake: 'Using routine back pain code (M54.50) or pre-operative disc displacement code (M51.26).',
    common_trap: 'Failing to assign the specific postprocedural category M96 code when failed back surgery syndrome is documented.',
    learning_objective: 'Report postlaminectomy syndrome using specific post-procedural code M96.1.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M96.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'post-procedure', 'post-laminectomy', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-085',
    case_number: 85,
    title: 'Lumbar Spinal Stenosis with Neurogenic Claudication',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Advanced',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 73-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Presents with bilateral calf heaviness, cramping, and numbness when walking more than 1 block (neurogenic claudication). Symptoms are immediately relieved by sitting down or leaning forward over a shopping cart (flexion relief). Vascular pulses were evaluated and normal.

OBJECTIVE:
Physical Exam: Lumbar extension reproduces bilateral leg heaviness; forward flexion relieves symptoms. Distal pedal pulses 2+/4 bilaterally without trophic skin changes. Ankle-brachial index (ABI) normal (1.1 bilaterally).
Lumbar MRI: Severe multi-level lumbar spinal canal stenosis at L3-L4 and L4-L5 secondary to ligamentum flavum hypertrophy and facet arthrosis, with thecal sac AP diameter reduced to 5 mm.

ASSESSMENT:
Spinal stenosis, lumbar region, with neurogenic claudication.

PLAN:
Lumbar epidural steroid injection, physical therapy for lumbar flexion conditioning, surgical consultation for lumbar decompression.`,
    question: 'Which ICD-10-CM code reports spinal stenosis of the lumbar region with neurogenic claudication?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M48.061 — Spinal stenosis, lumbar region with neurogenic claudication', codeSnippet: 'M48.061' },
      { id: 'opt_b', label: 'B', text: 'M48.062 — Spinal stenosis, lumbar region without neurogenic claudication', codeSnippet: 'M48.062' },
      { id: 'opt_c', label: 'C', text: 'I73.9 — Peripheral vascular disease, unspecified (vascular claudication)', codeSnippet: 'I73.9' },
      { id: 'opt_d', label: 'D', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M48.061',
    icd10cm_code: 'M48.061',
    code_description: 'Spinal stenosis, lumbar region with neurogenic claudication',
    explanation: 'Subcategory M48.06 classifies lumbar spinal stenosis. The 6th character 1 specifically captures with neurogenic claudication: M48.061. Code M48.062 is for without neurogenic claudication.',
    documentation_evidence: 'Assessment: Spinal stenosis, lumbar region, with neurogenic claudication.',
    coding_concept: 'Lumbar Spinal Stenosis with Neurogenic Claudication (M48.061)',
    common_mistake: 'Using code M48.062 (without neurogenic claudication) or confusing neurogenic claudication with vascular claudication (I73.9).',
    common_trap: 'Failing to assign the 6th character 1 for documented neurogenic claudication.',
    learning_objective: 'Report lumbar spinal stenosis with neurogenic claudication using specific 6-character code M48.061.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M48.06',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['spine', 'lumbar', 'spinal-stenosis', 'neurogenic-claudication', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-086',
    case_number: 86,
    title: 'Avascular Necrosis / Osteonecrosis of Right Femoral Head',
    specialty: 'Hip',
    body_region: 'Hip',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 42-year-old male
Setting: Orthopedic Adult Reconstruction

SUBJECTIVE:
Presents with progressive, deep right groin pain and weight-bearing limp for 4 months. Patient has a history of high-dose corticosteroid therapy for severe asthma 2 years ago. Denies trauma.

OBJECTIVE:
Right Hip Exam: Antalgic gait. Internal rotation of the right hip severely restricted and painful (only 5° vs 35° left). Log roll test positive for deep anterior hip pain.
Pelvis/Hip Radiographs: Subchondral radiolucent crescent sign in the anterosuperior right femoral head with early subchondral cortical collapse (Ficat stage III).
MRI Right Hip: Extensive serpiginous low-signal band demarcation of the right femoral head with bone marrow edema confirming osteonecrosis.

ASSESSMENT:
Idiopathic / secondary osteonecrosis (avascular necrosis) of right femoral head.

PLAN:
Scheduled for right hip core decompression with bone marrow aspirate concentrate (BMAC) vs total hip arthroplasty.`,
    question: 'Which ICD-10-CM code reports idiopathic osteonecrosis of the right femur (femoral head)?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M87.051 — Idiopathic osteonecrosis of right femur', codeSnippet: 'M87.051' },
      { id: 'opt_b', label: 'B', text: 'M87.052 — Idiopathic osteonecrosis of left femur', codeSnippet: 'M87.052' },
      { id: 'opt_c', label: 'C', text: 'M16.11 — Primary osteoarthritis, right hip', codeSnippet: 'M16.11' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M87.051',
    icd10cm_code: 'M87.051',
    code_description: 'Idiopathic osteonecrosis of right femur',
    explanation: 'Category M87.05- classifies idiopathic osteonecrosis of the femur. The 6th character 1 designates the right femur: M87.051.',
    documentation_evidence: 'Assessment: Idiopathic / secondary osteonecrosis (avascular necrosis) of right femoral head.',
    coding_concept: 'Femoral Head Osteonecrosis (M87.051) Specificity and Laterality',
    common_mistake: 'Coding primary osteoarthritis (M16.11) or wrong laterality.',
    common_trap: 'Overlooking avascular necrosis subchondral crescent sign and coding generic hip arthritis.',
    learning_objective: 'Report osteonecrosis of the femoral head using M87.051 with right limb laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M87.05',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['hip', 'osteonecrosis', 'avascular-necrosis', 'laterality', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-087',
    case_number: 87,
    title: 'Femoroacetabular Impingement (FAI): Right Hip Cam/Pincer Deformity',
    specialty: 'Hip',
    body_region: 'Hip',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 24-year-old male soccer player
Setting: Hip Preservation Center

SUBJECTIVE:
Presents with anterior right groin pain described as a "C-sign" when sitting for prolonged periods or pivoting on the field for 6 months.

OBJECTIVE:
Right Hip Exam: Positive FADIR test (Flexion, Adduction, Internal Rotation produces sharp anterior groin impingement pain). Hip internal rotation in 90° flexion limited to 10° on the right compared to 30° on the left.
Radiographs & 3D CT Right Hip: Cam-type femoral head-neck junction asphericity (alpha angle 68°) and pincer-type acetabular overcoverage (crossover sign positive).
MR Arthrogram: Anterosuperior acetabular labral tear with chondrolabral separation.

ASSESSMENT:
Femoroacetabular impingement (FAI), right hip.

PLAN:
Hip preservation physical therapy, followed by right hip arthroscopic femoroplasty, acetabular rim trimming, and labral refixation.`,
    question: 'Which ICD-10-CM code reports femoroacetabular impingement (FAI) of the right hip?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M25.851 — Other specified joint disorders, right hip (Femoroacetabular impingement)', codeSnippet: 'M25.851' },
      { id: 'opt_b', label: 'B', text: 'M25.852 — Other specified joint disorders, left hip', codeSnippet: 'M25.852' },
      { id: 'opt_c', label: 'C', text: 'M16.11 — Primary osteoarthritis, right hip', codeSnippet: 'M16.11' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M25.851',
    icd10cm_code: 'M25.851',
    code_description: 'Other specified joint disorders, right hip',
    explanation: 'Femoroacetabular impingement (FAI, Cam/Pincer morphology) is indexed under "Impingement, femoroacetabular" to category M25.85- (Other specified joint disorders, hip). The 6th character 1 designates the right hip: M25.851.',
    documentation_evidence: 'Assessment: Femoroacetabular impingement (FAI), right hip.',
    coding_concept: 'Femoroacetabular Impingement (FAI) Indexing to M25.851',
    common_mistake: 'Assigning osteoarthritis or generic pain code when FAI is confirmed on clinical exam and 3D imaging.',
    common_trap: 'Mismatched laterality or searching under deformity rather than specified joint disorders.',
    learning_objective: 'Index femoroacetabular impingement (FAI) to M25.851 for the right hip.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Alphabetic Index & Category M25.85',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['hip', 'fai', 'impingement', 'laterality', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-088',
    case_number: 88,
    title: 'Posterior Tibial Tendon Dysfunction (PTTD): Acquired Flatfoot Deformity',
    specialty: 'Foot/Ankle',
    body_region: 'Foot/Ankle',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 59-year-old female
Setting: Foot & Ankle Orthopedic Surgery

SUBJECTIVE:
Presents with medial right ankle pain and progressive flattening of the medial arch of the right foot over 1 year. Complains that her right foot rolls inward and she can no longer push off on her toes.

OBJECTIVE:
Right Foot Exam: Medial longitudinal arch collapse with hindfoot valgus and forefoot abduction ("too many toes" sign positive on the right from behind). Tenderness and swelling along the right posterior tibial tendon sheath behind the medial malleolus. Inability to perform single-leg heel raise on the right.
Weight-bearing Radiographs: Increased talonavicular uncoverage and loss of calcaneal pitch on the right.

ASSESSMENT:
Posterior tibial tendon dysfunction (PTTD) with acquired pes planus (flatfoot), right foot.

PLAN:
Custom molded ankle-foot orthosis (Arizona AFO brace), physical therapy for eccentric posterior tibial strengthening.`,
    question: 'Which ICD-10-CM code reports acquired pes planus (flatfoot) of the right foot?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M21.41 — Flat foot [pes planus] (acquired), right foot', codeSnippet: 'M21.41' },
      { id: 'opt_b', label: 'B', text: 'M21.42 — Flat foot [pes planus] (acquired), left foot', codeSnippet: 'M21.42' },
      { id: 'opt_c', label: 'C', text: 'Q66.51 — Congenital pes planus, right foot', codeSnippet: 'Q66.51' },
      { id: 'opt_d', label: 'D', text: 'M76.811 — Other specified enthesopathies, right lower leg', codeSnippet: 'M76.811' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M21.41',
    icd10cm_code: 'M21.41',
    code_description: 'Flat foot [pes planus] (acquired), right foot',
    explanation: 'Category M21.4- classifies acquired flatfoot deformity (pes planus). The 5th character 1 designates the right foot: M21.41. Congenital pes planus is classified in Chapter 17 (Q66.5-).',
    documentation_evidence: 'Assessment: Posterior tibial tendon dysfunction (PTTD) with acquired pes planus (flatfoot), right foot.',
    coding_concept: 'Acquired Pes Planus (M21.41) vs Congenital Pes Planus (Q66.5)',
    common_mistake: 'Using congenital flatfoot code (Q66.5) or wrong laterality.',
    common_trap: 'Selecting congenital deformity code for an adult acquired degenerative tendon collapse.',
    learning_objective: 'Report adult acquired pes planus deformity using category M21.4- with proper laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M21.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'pttd', 'pes-planus', 'laterality', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-089',
    case_number: 89,
    title: 'Dupuytren Contracture: Palmar Fascial Fibromatosis Right Hand',
    specialty: 'Upper Extremity',
    body_region: 'Upper Extremity',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 63-year-old male
Setting: Hand Surgery Clinic

SUBJECTIVE:
Presents with progressive curling and flexion contracture of his right ring and small fingers into the palm over 2 years. Unable to place his right hand flat on a table (positive tabletop test).

OBJECTIVE:
Right Hand Exam: Prominent nodular thickening and longitudinal pretendinous cord along the right 4th and 5th rays. Right ring finger MCP joint fixed in 35° flexion; PIP joint in 20° flexion contracture. Sensation and vascular supply intact.

ASSESSMENT:
Dupuytren contracture / palmar fascial fibromatosis, right hand.

PLAN:
Discussed collagenase clostridium histolyticum (Xiaflex) enzymatic cord injection vs open partial palmar fasciectomy.`,
    question: 'Which ICD-10-CM code reports Dupuytren contracture / palmar fascial fibromatosis?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M72.0 — Palmar fascial fibromatosis [Dupuytren]', codeSnippet: 'M72.0' },
      { id: 'opt_b', label: 'B', text: 'M65.341 — Trigger finger, right ring finger', codeSnippet: 'M65.341' },
      { id: 'opt_c', label: 'C', text: 'M24.541 — Contracture, right hand', codeSnippet: 'M24.541' },
      { id: 'opt_d', label: 'D', text: 'M72.2 — Plantar fascial fibromatosis', codeSnippet: 'M72.2' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M72.0',
    icd10cm_code: 'M72.0',
    code_description: 'Palmar fascial fibromatosis [Dupuytren]',
    explanation: 'ICD-10-CM code M72.0 is the dedicated 4-character code for palmar fascial fibromatosis [Dupuytren]. It does not have further sub-character breakdowns for laterality.',
    documentation_evidence: 'Assessment: Dupuytren contracture / palmar fascial fibromatosis, right hand.',
    coding_concept: 'Dupuytren Contracture Dedicated Code (M72.0)',
    common_mistake: 'Confusing palmar fascial contracture with trigger finger (M65.3) or plantar fibromatosis (M72.2).',
    common_trap: 'Attempting to assign invalid 5th/6th characters to complete 4-character code M72.0.',
    learning_objective: 'Assign complete 4-character code M72.0 for Dupuytren contracture.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M72.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'dupuytren', 'contracture', 'hand', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-090',
    case_number: 90,
    title: 'Age-Related Postmenopausal Osteoporosis without Current Pathological Fracture',
    specialty: 'General MSK',
    body_region: 'General Musculoskeletal',
    difficulty: 'Intermediate',
    skill: 'Diagnosis vs Symptom',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 68-year-old female
Setting: Metabolic Bone & Osteoporosis Clinic

SUBJECTIVE:
Presents for routine bone density screening follow-up. Asymptomatic, denies falls, back pain, or prior fractures.

OBJECTIVE:
Physical Exam: Well-nourished, normal thoracic kyphosis, height loss 0.5 cm over 3 years. No bony point tenderness over spine or hips.
DEXA Bone Mineral Density Scan:
- Lumbar spine (L1-L4) T-score: -2.8
- Left femoral neck T-score: -2.9
- Total hip T-score: -2.6
Thoracolumbar Spine Radiographs: No vertebral compression deformities or acute/healing fractures.

ASSESSMENT:
Age-related postmenopausal osteoporosis without current pathological fracture.

PLAN:
Initiate oral bisphosphonate (alendronate 70 mg weekly), calcium 1200 mg daily, vitamin D3 2000 IU daily, fall prevention counseling.`,
    question: 'Which ICD-10-CM code reports age-related postmenopausal osteoporosis without current pathological fracture?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M81.0 — Age-related osteoporosis without current pathological fracture', codeSnippet: 'M81.0' },
      { id: 'opt_b', label: 'B', text: 'M80.00XA — Age-related osteoporosis with current pathological fracture, unspecified site, initial encounter', codeSnippet: 'M80.00XA' },
      { id: 'opt_c', label: 'C', text: 'M85.80 — Other specified disorders of bone density and structure (Osteopenia)', codeSnippet: 'M85.80' },
      { id: 'opt_d', label: 'D', text: 'Z87.310 — Personal history of (healed) osteoporosis fracture', codeSnippet: 'Z87.310' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M81.0',
    icd10cm_code: 'M81.0',
    code_description: 'Age-related osteoporosis without current pathological fracture',
    explanation: 'Per Official Guidelines I.C.13.d, category M81 is for osteoporosis without pathological fracture. Code M81.0 represents age-related postmenopausal osteoporosis without current fracture. Category M80 is only used when a current pathological fracture exists.',
    documentation_evidence: 'Assessment: Age-related postmenopausal osteoporosis without current pathological fracture.',
    coding_concept: 'Osteoporosis without Fracture (M81.0) vs with Current Pathological Fracture (M80.-)',
    common_mistake: 'Coding category M80 (osteoporosis with current fracture) when imaging confirms no fracture is present.',
    common_trap: 'Assigning a fracture code to a patient with low bone density but no documented fracture.',
    learning_objective: 'Report age-related osteoporosis without current fracture using M81.0 in accordance with Guideline I.C.13.d.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Official Guidelines I.C.13.d & Category M81.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['general-msk', 'osteoporosis', 'dexa', 'guidelines', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-091',
    case_number: 91,
    title: 'Chronic Tophaceous Gout: Right Great Toe (1st MTP Joint)',
    specialty: 'General MSK',
    body_region: 'General Musculoskeletal',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 60-year-old male
Setting: Rheumatology Clinic

SUBJECTIVE:
Presents with recurrent painful flare-ups and chronic chalky nodules over the right great toe and lateral foot for 4 years.

OBJECTIVE:
Right Foot Exam: Firm, non-tender, yellowish-white subcutaneous nodular tophi over the dorsal-medial right 1st metatarsophalangeal (MTP) joint and lateral malleolus. Mild chronic synovial thickening without acute erythema.
Right 1st MTP Radiographs: Classic periarticular well-demarcated erosions with overhanging sclerotic cortical edges (Martel sign) and soft tissue tophaceous mass.
Serum Uric Acid: 9.4 mg/dL.

ASSESSMENT:
Idiopathic chronic tophaceous gout of right foot/toe, without mention of acute gout flare.

PLAN:
Initiate allopurinol 100 mg daily with colchicine 0.6 mg daily flare prophylaxis, serum uric acid target < 6.0 mg/dL.`,
    question: 'Which ICD-10-CM code reports idiopathic chronic tophaceous gout of the right foot / toe without acute gout attack?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M1A.0710 — Idiopathic chronic gout, right foot, without tophus (tophi) / with tophus: M1A.0710', codeSnippet: 'M1A.0710' },
      { id: 'opt_b', label: 'B', text: 'M10.071 — Idiopathic gout, right foot (acute attack)', codeSnippet: 'M10.071' },
      { id: 'opt_c', label: 'C', text: 'M1A.0720 — Idiopathic chronic gout, left foot', codeSnippet: 'M1A.0720' },
      { id: 'opt_d', label: 'D', text: 'M1A.00X0 — Idiopathic chronic gout, unspecified site', codeSnippet: 'M1A.00X0' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M1A.0710',
    icd10cm_code: 'M1A.0710',
    code_description: 'Idiopathic chronic gout, right foot, without tophus (tophi)',
    explanation: 'Category M1A classifies chronic gout. Subcategory M1A.071 represents idiopathic chronic gout of the right foot. The 7th character 0 indicates without current acute gout attack: M1A.0710. Category M10 is reserved for acute gout.',
    documentation_evidence: 'Assessment: Idiopathic chronic tophaceous gout of right foot/toe.',
    coding_concept: 'Chronic Gout (M1A.-) vs Acute Gout (M10.-)',
    common_mistake: 'Using acute gout category M10.071 when documentation specifies chronic gout with tophi without acute flare.',
    common_trap: 'Confusing acute flare category M10 with chronic disease category M1A.',
    learning_objective: 'Distinguish chronic gout (M1A.-) from acute gout (M10.-) with anatomical laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M1A & M10',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['general-msk', 'gout', 'tophus', 'rheumatology', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-092',
    case_number: 92,
    title: 'Complex Regional Pain Syndrome Type I (CRPS I): Right Upper Limb',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 49-year-old female
Setting: Physical Medicine & Rehabilitation / Pain Center

SUBJECTIVE:
Presents with intense, burning, disproportionate pain, hypersensitivity to light touch (allodynia), and skin color changes in her right hand and wrist 12 weeks following closed reduction of a right distal radius fracture. Fractures have completely united.

OBJECTIVE:
Right Hand/Wrist Exam: Severe hyperalgesia and allodynia to light brush touch. Diffuse non-pitting edema of right hand, dusky violaceous skin discoloration, increased skin temperature (+2.1°C vs left hand), and palmar hyperhidrosis. Severe restriction of finger flexion due to pain and swelling. No peripheral nerve laceration.

ASSESSMENT:
Complex regional pain syndrome type I (CRPS I / reflex sympathetic dystrophy) of right upper limb.

PLAN:
Right stellate ganglion sympathetic nerve block, intensive desensitization and graded motor imagery physical therapy.`,
    question: 'Which ICD-10-CM code reports Complex Regional Pain Syndrome Type I (CRPS I) of the right upper limb?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G90.511 — Complex regional pain syndrome I of right upper limb', codeSnippet: 'G90.511' },
      { id: 'opt_b', label: 'B', text: 'G90.512 — Complex regional pain syndrome I of left upper limb', codeSnippet: 'G90.512' },
      { id: 'opt_c', label: 'C', text: 'G90.521 — Complex regional pain syndrome I of right lower limb', codeSnippet: 'G90.521' },
      { id: 'opt_d', label: 'D', text: 'M25.531 — Pain in right wrist', codeSnippet: 'M25.531' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G90.511',
    icd10cm_code: 'G90.511',
    code_description: 'Complex regional pain syndrome I of right upper limb',
    explanation: 'Category G90.51- specifically classifies CRPS I (reflex sympathetic dystrophy) of the upper limb. The 6th character 1 designates the right upper limb: G90.511.',
    documentation_evidence: 'Assessment: Complex regional pain syndrome type I (CRPS I) of right upper limb.',
    coding_concept: 'Complex Regional Pain Syndrome Type I (G90.511) Specificity and Laterality',
    common_mistake: 'Using lower limb category (G90.52) or nonspecific wrist pain (M25.531).',
    common_trap: 'Mismatched upper vs lower extremity subcategory digit.',
    learning_objective: 'Report CRPS Type I with category G90.51- specifying limb laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category G90.51',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['rehabilitation', 'crps', 'neurology', 'laterality', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-093',
    case_number: 93,
    title: 'Sequelae of Cerebrovascular Accident: Spastic Hemiplegia Right Dominant Side',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Advanced',
    skill: 'Rehabilitation Documentation',
    primary_skill: 'Rehabilitation Documentation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 64-year-old right-handed male
Setting: Outpatient Neuro-Rehabilitation Clinic

SUBJECTIVE:
Referred for ongoing occupational and physical therapy for chronic right-sided weakness 9 months following an ischemic stroke (cerebral infarction).

OBJECTIVE:
Neurological Exam: Right spastic hemiplegia. Right upper extremity: Ashworth scale 3 spasticity in biceps and finger flexors, flexor synergy posture. Right lower extremity: Ashworth 2 in gastrocnemius, circumduction gait pattern, uses right ankle-foot orthosis (AFO). Cranial nerves intact.

ASSESSMENT:
Spastic hemiplegia affecting right dominant side as a late effect/sequela of previous cerebral infarction.

PLAN:
Botulinum toxin injections for right arm spasticity, neuromuscular electrical stimulation, constraint-induced movement therapy.`,
    question: 'Which ICD-10-CM code reports spastic hemiplegia affecting the right dominant side as a sequela of cerebral infarction?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'I69.351 — Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side', codeSnippet: 'I69.351' },
      { id: 'opt_b', label: 'B', text: 'I69.352 — Hemiplegia following cerebral infarction affecting left dominant side', codeSnippet: 'I69.352' },
      { id: 'opt_c', label: 'C', text: 'G81.11 — Spastic hemiplegia affecting right dominant side', codeSnippet: 'G81.11' },
      { id: 'opt_d', label: 'D', text: 'I63.9 — Cerebral infarction, unspecified', codeSnippet: 'I63.9' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'I69.351',
    icd10cm_code: 'I69.351',
    code_description: 'Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side',
    explanation: 'Per Official Guidelines I.C.9.d, residual neurological deficits from a prior stroke are coded using category I69 (Sequelae of cerebrovascular disease). Subcategory I69.35- captures hemiplegia following cerebral infarction, and the 6th character 1 designates the right dominant side: I69.351.',
    documentation_evidence: 'Assessment: Spastic hemiplegia affecting right dominant side as a late effect/sequela of previous cerebral infarction.',
    coding_concept: 'CVA Sequelae Combination Coding (Category I69) and Dominant Side Selection',
    common_mistake: 'Using acute stroke code (I63.9) or standalone hemiplegia code (G81.11) without stroke etiology.',
    common_trap: 'Coding an acute cerebrovascular event during outpatient chronic post-stroke rehabilitation.',
    learning_objective: 'Assign combination sequela code I69.351 for chronic post-stroke hemiplegia specifying dominant laterality.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Official Guidelines I.C.9.d & Category I69.35',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['rehabilitation', 'stroke', 'cva-sequelae', 'hemiplegia', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-094',
    case_number: 94,
    title: 'Post-Polio Syndrome: Late Neuromuscular Deterioration',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 72-year-old female
Setting: Neuromuscular Physical Medicine & Rehabilitation

SUBJECTIVE:
Contracted acute paralytic poliomyelitis at age 8 with residual left lower extremity weakness. Over the past 18 months, reports new progressive muscle fatigue, muscle atrophy, and increasing weakness in previously stable right upper and lower extremities.

OBJECTIVE:
Exam: New bilateral lower motor neuron weakness without upper motor neuron signs. Muscle fasiculations in right quadriceps. Severe generalized fatigue.
EMG/NCS: Chronic widespread anterior horn cell denervation with superimposed new active motor unit remodeling.

ASSESSMENT:
Post-polio syndrome.

PLAN:
Energy conservation occupational therapy, non-fatiguing aquatic exercise physical therapy, custom lightweight bracing.`,
    question: 'Which ICD-10-CM code reports post-polio syndrome?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G14 — Postpolio syndrome', codeSnippet: 'G14' },
      { id: 'opt_b', label: 'B', text: 'B91 — Sequelae of poliomyelitis', codeSnippet: 'B91' },
      { id: 'opt_c', label: 'C', text: 'A80.9 — Acute poliomyelitis, unspecified', codeSnippet: 'A80.9' },
      { id: 'opt_d', label: 'D', text: 'G70.00 — Myasthenia gravis without (acute) exacerbation', codeSnippet: 'G70.00' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G14',
    icd10cm_code: 'G14',
    code_description: 'Postpolio syndrome',
    explanation: 'ICD-10-CM code G14 is specifically assigned for post-polio syndrome (progressive post-poliomyelitis muscular atrophy). Code B91 is for static sequelae/late effects of polio without active post-polio syndrome.',
    documentation_evidence: 'Assessment: Post-polio syndrome.',
    coding_concept: 'Post-Polio Syndrome (G14) vs Static Poliomyelitis Sequelae (B91)',
    common_mistake: 'Using B91 (static polio sequelae) or A80 (acute infection) for post-polio syndrome.',
    common_trap: 'Confusing post-polio syndrome (G14) with old inactive polio sequelae (B91).',
    learning_objective: 'Report post-polio syndrome using dedicated code G14.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category G14 & Category B91',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['rehabilitation', 'neurology', 'post-polio', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-095',
    case_number: 95,
    title: 'Lisfranc Fracture-Dislocation: Tarsometatarsal Joint Complex Left Foot',
    specialty: 'Injury',
    body_region: 'Foot/Ankle',
    difficulty: 'Advanced',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 23-year-old male
Setting: Emergency Department / Orthopedic Trauma

SUBJECTIVE:
Sustained direct trauma to his left midfoot when an opponent landed on his plantarflexed foot during a football tackle 1 hour ago. Immediate severe midfoot pain, inability to bear any weight.

OBJECTIVE:
Left Foot Exam: Severe midfoot dorsal swelling and plantar midfoot ecchymosis (pathognomonic plantar bruising). Exquisite tenderness across the tarsometatarsal (TMT) joints.
Radiographs (3 views weight-bearing left foot): 3.5 mm lateral displacement and diastasis of the base of the 2nd metatarsal relative to the medial cuneiform with avulsion flake fracture of the 2nd metatarsal base (Lisfranc ligament tear and dislocation).

ASSESSMENT:
Dislocation of tarsometatarsal (Lisfranc) joint of left foot, initial encounter.

PLAN:
Posterior splint, non-weight bearing on crutches, urgent open reduction internal fixation (ORIF) with screw stabilization.`,
    question: 'Which ICD-10-CM code reports a closed dislocation of the left tarsometatarsal joint on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S93.305A — Dislocation of unspecified site of left foot, initial encounter (includes Lisfranc dislocation)', codeSnippet: 'S93.305A' },
      { id: 'opt_b', label: 'B', text: 'S93.304A — Dislocation of unspecified site of right foot, initial encounter', codeSnippet: 'S93.304A' },
      { id: 'opt_c', label: 'C', text: 'S93.402A — Sprain of unspecified ligament of left ankle, initial encounter', codeSnippet: 'S93.402A' },
      { id: 'opt_d', label: 'D', text: 'M25.572 — Pain in left ankle and joints of left foot', codeSnippet: 'M25.572' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S93.305A',
    icd10cm_code: 'S93.305A',
    code_description: 'Dislocation of unspecified site of left foot, initial encounter',
    explanation: 'Lisfranc tarsometatarsal dislocations are indexed under category S93.3- (Dislocation of foot). The 6th character 5 designates the left foot, and 7th character A specifies the initial acute encounter: S93.305A.',
    documentation_evidence: 'Assessment: Dislocation of tarsometatarsal (Lisfranc) joint of left foot, initial encounter.',
    coding_concept: 'Lisfranc Joint Dislocation Trauma Coding (S93.3-) and 7th Character Extension',
    common_mistake: 'Coding an ankle sprain (S93.4) or using right foot laterality digit.',
    common_trap: 'Confusing midfoot Lisfranc joint injury with an ankle joint sprain.',
    learning_objective: 'Assign S93.305A for traumatic left foot tarsometatarsal (Lisfranc) dislocation on initial encounter.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category S93.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['injury', 'foot-ankle', 'lisfranc', 'dislocation', '7th-character', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-096',
    case_number: 96,
    title: 'Scaphoid Fracture Nonunion: 7th Character Extension Specificity',
    specialty: 'Injury',
    body_region: 'Upper Extremity',
    difficulty: 'Advanced',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 29-year-old male
Setting: Hand & Microvascular Surgery Clinic

SUBJECTIVE:
Presents with persistent radial wrist pain and weakness when gripping tools 7 months following an untreated fall on his outstretched right hand.

OBJECTIVE:
Right Hand/Wrist Exam: Point tenderness over the anatomical snuffbox. Wrist flexion and extension limited by 20° compared to left. Grip strength 60% of contralateral side.
Wrist Radiographs & CT: Frank nonunion across the waist of the right scaphoid (navicular) with sclerotic fracture margins, cystic resorption, and early radiocarpal arthrosis. No bony bridging.

ASSESSMENT:
Unspecified fracture of navicular [scaphoid] bone of right wrist, subsequent encounter for fracture with nonunion.

PLAN:
Right scaphoid nonunion open reduction internal fixation with iliac crest autologous bone grafting and headless compression screw.`,
    question: 'Which ICD-10-CM code reports a scaphoid fracture of the right wrist with nonunion during a subsequent encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S62.001K — Fracture of navicular [scaphoid] bone of right wrist, subsequent encounter for fracture with nonunion', codeSnippet: 'S62.001K' },
      { id: 'opt_b', label: 'B', text: 'S62.001A — Fracture of navicular bone of right wrist, initial encounter', codeSnippet: 'S62.001A' },
      { id: 'opt_c', label: 'C', text: 'S62.001D — Fracture of navicular bone of right wrist, subsequent encounter with routine healing', codeSnippet: 'S62.001D' },
      { id: 'opt_d', label: 'D', text: 'M84.531A — Pathological fracture in neoplastic disease, right wrist', codeSnippet: 'M84.531A' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S62.001K',
    icd10cm_code: 'S62.001K',
    code_description: 'Fracture of navicular [scaphoid] bone of right wrist, subsequent encounter for fracture with nonunion',
    explanation: 'Category S62.00- classifies scaphoid fractures. The 6th character 1 designates the right wrist, and the 7th character K specifically designates a subsequent encounter for fracture with nonunion: S62.001K. Character A is initial encounter, and D is routine healing.',
    documentation_evidence: 'Assessment: Unspecified fracture of navicular [scaphoid] bone of right wrist, subsequent encounter for fracture with nonunion.',
    coding_concept: '7th Character Extension K for Fracture Nonunion',
    common_mistake: 'Using routine healing extension D or initial encounter extension A when nonunion is documented.',
    common_trap: 'Failing to assign 7th character K when chronic nonunion with sclerotic bone margins is present.',
    learning_objective: 'Apply 7th character extension K for subsequent encounters involving fracture nonunion.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category S62.0 & Guidelines I.C.19.a',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['injury', 'upper-extremity', 'scaphoid', 'nonunion', '7th-character', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-097',
    case_number: 97,
    title: 'Distal Radius Fracture Malunion: 7th Character Extension Specificity',
    specialty: 'Injury',
    body_region: 'Upper Extremity',
    difficulty: 'Advanced',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 61-year-old female
Setting: Orthopedic Reconstructive Surgery

SUBJECTIVE:
Presents with prominent "dinner fork" deformity, wrist stiffness, and loss of forearm pronation/supination 5 months following non-operative cast treatment for a displaced left distal radius fracture.

OBJECTIVE:
Left Wrist Exam: Prominent dorsal radial prominence, radial deviation of hand. Wrist flexion 30°, extension 35°, supination limited to 20°.
Radiographs (Left Wrist): Healed left distal radius fracture with 25° dorsal tilt (loss of normal volar tilt), 5 mm radial shortening, and positive ulnar variance causing ulnocarpal abutment. Bony union complete in malaligned position.

ASSESSMENT:
Fracture of lower end of left radius, subsequent encounter for closed fracture with malunion.

PLAN:
Left distal radius corrective opening-wedge osteotomy with volar locking plate and distal ulna resection (Darrach procedure).`,
    question: 'Which ICD-10-CM code reports a fracture of the lower end of the left radius with malunion during a subsequent encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S52.502P — Unspecified fracture of lower end of left radius, subsequent encounter for closed fracture with malunion', codeSnippet: 'S52.502P' },
      { id: 'opt_b', label: 'B', text: 'S52.502K — Unspecified fracture of lower end of left radius, subsequent encounter for fracture with nonunion', codeSnippet: 'S52.502K' },
      { id: 'opt_c', label: 'C', text: 'S52.502D — Unspecified fracture of lower end of left radius, subsequent encounter with routine healing', codeSnippet: 'S52.502D' },
      { id: 'opt_d', label: 'D', text: 'S52.501P — Fracture of lower end of right radius with malunion', codeSnippet: 'S52.501P' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S52.502P',
    icd10cm_code: 'S52.502P',
    code_description: 'Unspecified fracture of lower end of left radius, subsequent encounter for closed fracture with malunion',
    explanation: 'Category S52.50- classifies fractures of the lower end of the radius. The 6th character 2 designates the left radius, and the 7th character P designates subsequent encounter for closed fracture with malunion: S52.502P. 7th character K is nonunion, and D is routine healing.',
    documentation_evidence: 'Assessment: Fracture of lower end of left radius, subsequent encounter for closed fracture with malunion.',
    coding_concept: '7th Character Extension P for Fracture Malunion',
    common_mistake: 'Confusing 7th character P (malunion) with K (nonunion) or using routine healing D.',
    common_trap: 'Selecting nonunion character K when the fracture is fully united but in a deformed/malaligned position.',
    learning_objective: 'Distinguish 7th character extension P (malunion) from K (nonunion) and D (routine healing).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category S52.5 & Guidelines I.C.19.a',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['injury', 'upper-extremity', 'distal-radius', 'malunion', '7th-character', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-098',
    case_number: 98,
    title: 'Posterior Cruciate Ligament (PCL) Tear: Acute Initial Encounter',
    specialty: 'Knee',
    body_region: 'Knee',
    difficulty: 'Advanced',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 31-year-old male
Setting: Emergency Department / Sports Orthopedics

SUBJECTIVE:
Front-seat passenger in a motor vehicle collision 3 hours ago whose flexed right knee struck the dashboard ("dashboard injury"). Severe acute right knee swelling, posterior pain.

OBJECTIVE:
Right Knee Exam: Large acute hemarthrosis. Positive posterior drawer test (12 mm posterior tibial translation with soft endpoint). Positive posterior sag sign (Godfrey test). Lachman test negative. Medial and lateral collateral ligaments stable.
MRI Right Knee: Complete acute mid-substance disruption of the right posterior cruciate ligament (PCL) with acute proximal tibial bone contusion. ACL, MCL, and both menisci intact.

ASSESSMENT:
Sprain of posterior cruciate ligament (PCL) of right knee, initial encounter.

PLAN:
PCL dynamic extension hinged knee brace locked in extension, crutches, orthopedic sports medicine follow-up in 3 days.`,
    question: 'Which ICD-10-CM code reports an acute sprain/tear of the posterior cruciate ligament of the right knee on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.521A — Sprain of posterior cruciate ligament of right knee, initial encounter', codeSnippet: 'S83.521A' },
      { id: 'opt_b', label: 'B', text: 'S83.511A — Sprain of anterior cruciate ligament of right knee, initial encounter', codeSnippet: 'S83.511A' },
      { id: 'opt_c', label: 'C', text: 'S83.522A — Sprain of posterior cruciate ligament of left knee, initial encounter', codeSnippet: 'S83.522A' },
      { id: 'opt_d', label: 'D', text: 'M23.51 — Chronic instability of knee, right knee', codeSnippet: 'M23.51' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.521A',
    icd10cm_code: 'S83.521A',
    code_description: 'Sprain of posterior cruciate ligament of right knee, initial encounter',
    explanation: 'Category S83.52- classifies posterior cruciate ligament (PCL) sprains/tears. The 6th character 1 designates the right knee, and 7th character A represents the initial encounter: S83.521A. S83.51- is for ACL tears.',
    documentation_evidence: 'Assessment: Sprain of posterior cruciate ligament (PCL) of right knee, initial encounter.',
    coding_concept: 'Cruciate Ligament Specificity: PCL (S83.52-) vs ACL (S83.51-)',
    common_mistake: 'Selecting anterior cruciate ligament (ACL) code (S83.511A) for a documented PCL tear.',
    common_trap: 'Confusing ACL and PCL ligament subcategories.',
    learning_objective: 'Report acute posterior cruciate ligament (PCL) sprains using category S83.52- with laterality and encounter extension.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category S83.52',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['injury', 'knee', 'pcl', '7th-character', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-099',
    case_number: 99,
    title: 'Cervical Whiplash Injury: Subsequent Physical Therapy Encounter',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Advanced',
    skill: 'Rehabilitation Documentation',
    primary_skill: 'Rehabilitation Documentation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 35-year-old female
Setting: Outpatient Physical Therapy

SUBJECTIVE:
Presents for physical therapy treatment 4 weeks following a rear-end motor vehicle collision. Complains of persistent neck stiffness, paracervical aching, and tension headaches. Denies arm numbness or radicular tingling.

OBJECTIVE:
Cervical Exam: Bilateral trapezius and sternocleidomastoid muscle guarding and myofascial trigger points. Cervical active range of motion: rotation 45° bilaterally (restricted), flexion 30°. Spurling test negative. Neurological upper extremity exam intact.
Imaging: Cervical spine x-rays performed in ED showed loss of cervical lordosis secondary to muscle spasm, no fracture or subluxation.

ASSESSMENT:
Sprain of ligaments of cervical spine (whiplash injury), subsequent encounter.

PLAN:
Physical therapy 2x/week for cervical gentle manual mobilization, deep neck flexor stabilization exercises, postural re-education.`,
    question: 'Which ICD-10-CM code reports a cervical spine ligament sprain (whiplash) during a subsequent encounter for physical therapy?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S13.4XXD — Sprain of ligaments of cervical spine, subsequent encounter', codeSnippet: 'S13.4XXD' },
      { id: 'opt_b', label: 'B', text: 'S13.4XXA — Sprain of ligaments of cervical spine, initial encounter', codeSnippet: 'S13.4XXA' },
      { id: 'opt_c', label: 'C', text: 'M54.2 — Cervicalgia', codeSnippet: 'M54.2' },
      { id: 'opt_d', label: 'D', text: 'Z47.89 — Encounter for other orthopedic aftercare', codeSnippet: 'Z47.89' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S13.4XXD',
    icd10cm_code: 'S13.4XXD',
    code_description: 'Sprain of ligaments of cervical spine, subsequent encounter',
    explanation: 'Per Official Guidelines I.C.19.a, physical therapy encounters for active healing of an acute traumatic injury are coded using the injury code with the 7th character D (subsequent encounter). Category S13.4 requires two placeholder X characters before assigning the 7th character: S13.4XXD.',
    documentation_evidence: 'Assessment: Sprain of ligaments of cervical spine (whiplash injury), subsequent encounter.',
    coding_concept: 'Placeholder X and 7th Character Extension D in Injury Rehabilitation (S13.4XXD)',
    common_mistake: 'Using initial encounter extension A, symptom code cervicalgia (M54.2), or forgetting placeholder characters XX.',
    common_trap: 'Assigning routine symptom code M54.2 instead of traumatic injury subsequent encounter code S13.4XXD.',
    learning_objective: 'Apply placeholder X characters and 7th character extension D for subsequent rehabilitation encounters of cervical sprains.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Official Guidelines I.C.19.a & Category S13.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['rehabilitation', 'cervical', 'sprain', 'whiplash', '7th-character', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-100',
    case_number: 100,
    title: 'Pathological Fracture of Left Femoral Neck in Age-Related Osteoporosis',
    specialty: 'General MSK',
    body_region: 'General Musculoskeletal',
    difficulty: 'Advanced',
    skill: 'Diagnosis vs Symptom',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 81-year-old female
Setting: Emergency Department / Orthopedic Trauma

SUBJECTIVE:
Presents with acute inability to bear weight and severe left groin pain after standing up from a chair at home. Denies high-energy trauma, trip, or mechanical blow; patient states her hip "just gave way while standing." Known history of severe postmenopausal osteoporosis.

OBJECTIVE:
Left Hip Exam: Left lower extremity shortened and externally rotated. Exquisite groin pain with any gentle movement. Neurovascular intact distally.
Radiographs (Left Hip/Pelvis): Displaced subcapital fracture of the left femoral neck through severely osteoporotic, thinned cortical bone. Severe generalized demineralization.

ASSESSMENT:
Age-related osteoporosis with current pathological fracture, left femur, initial encounter.

PLAN:
Urgent admission for left hip hemiarthroplasty.`,
    question: 'Which ICD-10-CM code reports an age-related osteoporosis with current pathological fracture of the left femur on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M80.052A — Age-related osteoporosis with current pathological fracture, left femur, initial encounter for fracture', codeSnippet: 'M80.052A' },
      { id: 'opt_b', label: 'B', text: 'S72.002A — Fracture of unspecified part of neck of left femur, initial encounter (Traumatic fracture)', codeSnippet: 'S72.002A' },
      { id: 'opt_c', label: 'C', text: 'M80.051A — Age-related osteoporosis with current pathological fracture, right femur, initial encounter', codeSnippet: 'M80.051A' },
      { id: 'opt_d', label: 'D', text: 'M81.0 — Age-related osteoporosis without current pathological fracture', codeSnippet: 'M81.0' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M80.052A',
    icd10cm_code: 'M80.052A',
    code_description: 'Age-related osteoporosis with current pathological fracture, left femur, initial encounter for fracture',
    explanation: 'Per Official Guidelines I.C.13.d, when a fracture occurs with minor or no trauma in a patient with osteoporosis, it is coded as an osteoporotic pathological fracture (category M80.-), NOT a traumatic fracture (category S72.-). Subcategory M80.052 designates age-related osteoporosis with pathological fracture of the left femur, and 7th character A represents the initial encounter: M80.052A.',
    documentation_evidence: 'Assessment: Age-related osteoporosis with current pathological fracture, left femur, initial encounter.',
    coding_concept: 'Osteoporotic Pathological Fracture (M80.052A) vs Traumatic Hip Fracture (S72.-)',
    common_mistake: 'Assigning a traumatic fracture code (S72.002A) when the fracture is explicitly documented as a fragility/pathological fracture in osteoporosis.',
    common_trap: 'Coding traumatic fracture for a non-traumatic spontaneous fragility fracture.',
    learning_objective: 'Differentiate osteoporotic pathological fractures (M80.-) from traumatic fractures (S72.-) according to Guideline I.C.13.d.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Official Guidelines I.C.13.d & Category M80.052',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['general-msk', 'osteoporosis', 'pathological-fracture', 'guidelines', 'assessment-ready'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
];
