import { CaseItem } from '../../types';

export const BATCH_2_CASES: CaseItem[] = [
  {
    id: 'case-021',
    case_number: 21,
    title: 'Postoperative Knee Rehabilitation: Aftercare Sequencing',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Coding Judgment',
    primary_skill: 'Sequencing & Aftercare',
    secondary_skills: ['Laterality & Specificity'],
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 68-year-old male
Setting: Outpatient Physical Therapy / Rehabilitation

SUBJECTIVE:
Patient arrives for initial outpatient rehabilitation evaluation. Note from referring orthopedic surgeon states: "Patient is 3 weeks status post right total knee arthroplasty (TKA). Initiating physical therapy for gait training, range of motion, and quad strengthening." Patient reports expected postoperative soreness and joint tightness.

OBJECTIVE:
Right Knee: Well-healed surgical midline incision without erythema or drainage. Active ROM: 5° extension to 90° flexion. Quadriceps lag present. Antalgic gait with single-point cane.

ASSESSMENT:
Physical therapy encounter for routine aftercare following joint replacement surgery, right knee.

PLAN:
PT 3x/week for 6 weeks focusing on progressive resistive exercise, patellar mobility, and neuromuscular re-education.`,
    question: 'Which coding sequence accurately reflects this encounter for orthopedic postoperative rehabilitation aftercare?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'Z47.1 (Aftercare following joint replacement surgery) and Z96.651 (Presence of right artificial knee joint)', codeSnippet: 'Z47.1, Z96.651' },
      { id: 'opt_b', label: 'B', text: 'T84.84XA — Pain due to internal orthopedic prosthetic devices, implants, initial encounter', codeSnippet: 'T84.84XA' },
      { id: 'opt_c', label: 'C', text: 'M17.11 — Primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_d', label: 'D', text: 'Z96.651 as primary diagnosis alone', codeSnippet: 'Z96.651' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'Z47.1, Z96.651',
    icd10cm_code: 'Z47.1, Z96.651',
    code_description: 'Encounter for aftercare following joint replacement surgery; Presence of right artificial knee joint',
    explanation: 'According to ICD-10-CM Guideline I.C.21.c.7 (Aftercare), aftercare Z codes explain the primary reason for encounter when initial active treatment has concluded. Z47.1 is sequenced first as the reason for joint replacement aftercare, accompanied by Z96.651 to specify the presence of the right artificial knee joint.',
    documentation_evidence: 'Assessment: Physical therapy encounter for routine aftercare following joint replacement surgery, right knee.',
    coding_concept: 'Orthopedic Surgical Aftercare Sequencing and Status Codes (Guideline I.C.21)',
    common_mistake: 'Coding the original resolved osteoarthritis (M17.11) or coding complication codes (T84) for normal postoperative recovery.',
    common_trap: 'Re-coding pre-surgical osteoarthritis or sequencing status code as primary.',
    learning_objective: 'Apply appropriate aftercare Z-codes (Z47.1) and joint replacement status codes (Z96.65-) during postoperative therapy encounters.',
    target_time_seconds: 100,
    reference: 'ICD-10-CM Official Guidelines Section I.C.21.c.7 (Aftercare) & Tabular category Z47/Z96',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['rehabilitation', 'aftercare', 'knee', 'joint-replacement'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-022',
    case_number: 22,
    title: 'Stroke Rehabilitation: Late Effects & Dominant Hemiparesis',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Clinical Reasoning',
    primary_skill: 'Sequencing & Aftercare',
    secondary_skills: ['Clinical Reasoning'],
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 63-year-old right-handed female
Setting: Neuro-Rehabilitation Therapy Clinic

SUBJECTIVE:
Patient presents for rehabilitation assessment. History of ischemic stroke (cerebral infarction) 4 months ago. Family reports residual weakness on the right side and significant difficulty walking independently.

OBJECTIVE:
Physical Therapy Exam: Right upper and lower extremity hemiparesis (motor power 3/5). Increased tone in right gastrocnemius. Severe gait ataxia and gait instability requiring rolling walker and contact guard assist.

ASSESSMENT:
Physical therapy evaluation and treatment plan for hemiparesis affecting the right dominant side and gait instability secondary to past cerebral infarction.

PLAN:
Comprehensive physical therapy 3x/week for 8 weeks focusing on neuromuscular re-education, gait training, and functional mobility.`,
    question: 'How should the chronic sequelae (late effects) of the previous cerebral infarction be coded for this rehabilitation encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'I63.9 — Cerebral infarction, unspecified', codeSnippet: 'I63.9' },
      { id: 'opt_b', label: 'B', text: 'I69.351 — Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side', codeSnippet: 'I69.351' },
      { id: 'opt_c', label: 'C', text: 'G81.91 — Hemiplegia, unspecified affecting right dominant side', codeSnippet: 'G81.91' },
      { id: 'opt_d', label: 'D', text: 'I63.9 (Acute stroke) AND G81.91 (Hemiplegia)', codeSnippet: 'I63.9, G81.91' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'I69.351',
    icd10cm_code: 'I69.351',
    code_description: 'Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side',
    explanation: 'Category I69 indicates late effects/sequelae of cerebrovascular disease. Since the patient is in the post-acute recovery phase (4 months post-infarction) with right-sided hemiparesis in her dominant right side, code I69.351 specifically combines the cause (cerebral infarction sequela) and neurological manifestation with dominance.',
    documentation_evidence: 'Assessment: Hemiparesis affecting right dominant side secondary to past cerebral infarction.',
    coding_concept: 'Sequelae of Cerebrovascular Disease (Guideline I.C.9.d)',
    common_mistake: 'Coding an acute stroke code (I63.-) or using a non-specific G81 category code instead of the combination I69 sequela category.',
    common_trap: 'Coding acute infarction during post-acute recovery phase.',
    learning_objective: 'Master the distinction between acute stroke codes (I63) and combination sequelae codes (I69) with dominance/laterality designations.',
    target_time_seconds: 110,
    reference: 'ICD-10-CM Official Guidelines Section I.C.9.d (Sequelae of Cerebrovascular Disease)',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['rehabilitation', 'neurology', 'stroke', 'sequelae', 'dominant-side'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-023',
    case_number: 23,
    title: 'Post-Laminectomy Syndrome: Failed Back Syndrome',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 55-year-old male
Setting: Outpatient Pain Management & Spine Center

SUBJECTIVE:
Patient had L4-L5 decompressive laminectomy 18 months ago. Continues to experience chronic intractable low back pain and neuropathic leg aching despite surgery and postoperative physical therapy.

OBJECTIVE:
Lumbar Spine Exam: Well-healed lumbar midline surgical scar. Palpation demonstrates tenderness adjacent to surgical site. Lumbar MRI with contrast demonstrates extensive epidural fibrosis without recurrent disc herniation.

ASSESSMENT:
Post-laminectomy syndrome, lumbar.

PLAN:
Diagnostic lumbar epidural steroid injection under fluoroscopy. Scheduled trial of spinal cord stimulation.`,
    question: 'Which ICD-10-CM code reports postlaminectomy syndrome not elsewhere classified?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M96.1 — Postlaminectomy syndrome, not elsewhere classified', codeSnippet: 'M96.1' },
      { id: 'opt_b', label: 'B', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
      { id: 'opt_c', label: 'C', text: 'T81.89XA — Other complications of procedures, not elsewhere classified, initial encounter', codeSnippet: 'T81.89XA' },
      { id: 'opt_d', label: 'D', text: 'M51.26 — Other intervertebral disc displacement, lumbar region', codeSnippet: 'M51.26' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M96.1',
    icd10cm_code: 'M96.1',
    code_description: 'Postlaminectomy syndrome, not elsewhere classified',
    explanation: 'ICD-10-CM category M96.1 specifically denotes postlaminectomy syndrome (failed back surgery syndrome). Reporting generic low back pain (M54.50) fails to capture the documented post-surgical syndrome.',
    documentation_evidence: 'Assessment: Post-laminectomy syndrome, lumbar.',
    coding_concept: 'Post-procedural Musculoskeletal Disorders (Category M96)',
    common_mistake: 'Using generic low back pain (M54.50) when the specific postlaminectomy syndrome code exists.',
    common_trap: 'Coding acute surgical complication T81 for chronic postlaminectomy syndrome.',
    learning_objective: 'Identify and apply specific intraoperative/postprocedural musculoskeletal codes (M96.1) for chronic post-laminectomy pain.',
    target_time_seconds: 80,
    reference: 'ICD-10-CM Chapter 13 Category M96.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['spine', 'post-procedure', 'chronic-pain'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-024',
    case_number: 24,
    title: 'Bicipital Tendinitis: Long Head Biceps Pathology',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 38-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with anterior right shoulder pain for 6 weeks, aggravated during overhead bench pressing and throwing. Denies trauma or shoulder dislocation.

OBJECTIVE:
Right Shoulder Exam: Exquisite point tenderness localized over the bicipital groove of the anterior proximal humerus. Positive Speed test (pain in bicipital groove on resisted forward elevation with forearm supinated) and positive Yergason test. Full ROM. Left shoulder normal.

ASSESSMENT:
Bicipital tendinitis, right shoulder.

PLAN:
Ultrasound-guided biceps tendon sheath corticosteroid injection. Physical therapy for rotator cuff and periscapular stabilization.`,
    question: 'Which ICD-10-CM code reports bicipital tendinitis of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.21 — Bicipital tendinitis, right shoulder', codeSnippet: 'M75.21' },
      { id: 'opt_b', label: 'B', text: 'M75.22 — Bicipital tendinitis, left shoulder', codeSnippet: 'M75.22' },
      { id: 'opt_c', label: 'C', text: 'M75.41 — Impingement syndrome of right shoulder', codeSnippet: 'M75.41' },
      { id: 'opt_d', label: 'D', text: 'M25.511 — Pain in right shoulder', codeSnippet: 'M25.511' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.21',
    icd10cm_code: 'M75.21',
    code_description: 'Bicipital tendinitis, right shoulder',
    explanation: 'Category M75.2 represents bicipital tendinitis. The 5th character designates laterality: 1 = right shoulder (M75.21), 2 = left shoulder (M75.22). Shoulder pain (M25.511) is an integral symptom and is not separately coded.',
    documentation_evidence: 'Assessment: Bicipital tendinitis, right shoulder.',
    coding_concept: 'Biceps Tendinopathy Specificity and Anatomical Laterality',
    common_mistake: 'Picking non-specific shoulder pain (M25.511) or left shoulder digit (M75.22).',
    common_trap: 'Mismatched laterality character.',
    learning_objective: 'Accurately code bicipital tendinitis with laterality (M75.2-) based on physical exam and diagnostic assessment.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'tendinitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-025',
    case_number: 25,
    title: 'Degenerative Meniscal Tear vs. Acute Injury',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 64-year-old female
Setting: Orthopedic Clinic

SUBJECTIVE:
Presents with insidious onset of medial right knee joint line pain and mild joint swelling for 3 months. Denies twisting injury, fall, or sports trauma.

OBJECTIVE:
Right Knee Exam: Mild effusion. Tenderness localized along the medial joint line. McMurray test produces a painful click at the medial joint line. No ligamentous laxity.
MRI Right Knee: Degenerative horizontal cleavage tear of the posterior horn of the medial meniscus, right knee. No acute traumatic ligament tear.

ASSESSMENT:
Non-traumatic degenerative medial meniscus tear, right knee.

PLAN:
Conservative physical therapy, NSAIDs, unloader knee brace.`,
    question: 'Which ICD-10-CM code reports a non-traumatic / degenerative meniscal tear of the right medial meniscus?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M23.221 — Derangement of meniscus due to old tear or injury, right medial meniscus', codeSnippet: 'M23.221' },
      { id: 'opt_b', label: 'B', text: 'S83.241A — Tear of medial meniscus, current injury, right knee, initial encounter', codeSnippet: 'S83.241A' },
      { id: 'opt_c', label: 'C', text: 'M23.321 — Other meniscus derangements, right medial meniscus', codeSnippet: 'M23.321' },
      { id: 'opt_d', label: 'D', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M23.221',
    icd10cm_code: 'M23.221',
    code_description: 'Derangement of meniscus due to old tear or injury, right medial meniscus',
    explanation: 'In ICD-10-CM, non-traumatic, degenerative, or chronic tears of the meniscus are classified to Chapter 13 (M23.2- Derangement due to old tear/injury). Acute traumatic tears caused by current sports injury or trauma are classified to Chapter 19 (S83.2-). Because documentation specifies an insidious, degenerative non-traumatic tear, M23.221 is the correct code.',
    documentation_evidence: 'Assessment: Non-traumatic degenerative medial meniscus tear, right knee.',
    coding_concept: 'Chronic/Degenerative Meniscal Tears (M23) vs Acute Traumatic Tears (S83)',
    common_mistake: 'Assigning an acute trauma S-code (S83.241A) when the clinical record explicitly specifies degenerative etiology.',
    common_trap: 'Using traumatic injury codes for non-traumatic degenerative meniscal pathology.',
    learning_objective: 'Distinguish between chronic/degenerative meniscal tears (M23.2-) and acute traumatic tears (S83.2-).',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Chapter 13 Category M23.2 vs Chapter 19 Category S83.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'meniscus', 'degenerative-vs-traumatic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-026',
    case_number: 26,
    title: 'Subacromial Impingement Syndrome',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 46-year-old male
Setting: Outpatient Orthopedic Clinic

SUBJECTIVE:
Patient reports painful arc when lifting his left arm overhead between 70° and 120° for 2 months. Denies acute trauma or full-thickness rotator cuff tear.

OBJECTIVE:
Left Shoulder Exam: Neer impingement sign positive (pain with passive forward flexion). Hawkins-Kennedy impingement sign positive (pain with passive internal rotation in 90° flexion). Subacromial space tenderness. Rotator cuff manual muscle testing 5/5 without drop-arm sign. X-rays show type II acromion with subacromial spurring.

ASSESSMENT:
Impingement syndrome of left shoulder.

PLAN:
Subacromial bursa corticosteroid injection. Physical therapy for scapular stabilization and rotator cuff strengthening.`,
    question: 'Which ICD-10-CM code reports impingement syndrome of the left shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.41 — Impingement syndrome of right shoulder', codeSnippet: 'M75.41' },
      { id: 'opt_b', label: 'B', text: 'M75.42 — Impingement syndrome of left shoulder', codeSnippet: 'M75.42' },
      { id: 'opt_c', label: 'C', text: 'M75.102 — Unspecified rotator cuff tear of left shoulder', codeSnippet: 'M75.102' },
      { id: 'opt_d', label: 'D', text: 'M25.512 — Pain in left shoulder', codeSnippet: 'M25.512' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M75.42',
    icd10cm_code: 'M75.42',
    code_description: 'Impingement syndrome of left shoulder',
    explanation: 'Subacromial impingement syndrome is classified to category M75.4. The laterality digit 2 denotes the left shoulder: M75.42. Rotator cuff tear (M75.1-) is not documented and should not be assumed.',
    documentation_evidence: 'Assessment: Impingement syndrome of left shoulder.',
    coding_concept: 'Shoulder Impingement Syndrome Specificity',
    common_mistake: 'Assuming a rotator cuff tear (M75.1-) or selecting right shoulder digit (M75.41).',
    common_trap: 'Assuming impingement automatically includes a rotator cuff tear.',
    learning_objective: 'Report shoulder impingement syndrome (M75.4-) with correct anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'impingement', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-027',
    case_number: 27,
    title: 'Hallux Valgus (Bunion): Acquired Deformity Laterality',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 51-year-old female
Setting: Foot & Ankle Orthopedic Surgery

SUBJECTIVE:
Presents with progressive medial prominence and friction pain at the right first metatarsophalangeal (MTP) joint when wearing dress shoes. Left foot asymptomatic.

OBJECTIVE:
Right Foot: Prominent medial bunion eminence over 1st MTP joint with mild erythema from shoe pressure. Hallux valgus angle 24° on weight-bearing radiographs; intermetatarsal angle 12°. No severe degenerative arthritis of 1st MTP joint. Left foot alignment normal.

ASSESSMENT:
Hallux valgus (acquired), right foot.

PLAN:
Wide-toe box footwear recommendation, silicone bunion spacer, discussed distal chevron osteotomy if conservative measures fail.`,
    question: 'Which ICD-10-CM code reports acquired hallux valgus of the right foot?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M20.11 — Hallux valgus (acquired), right foot', codeSnippet: 'M20.11' },
      { id: 'opt_b', label: 'B', text: 'M20.12 — Hallux valgus (acquired), left foot', codeSnippet: 'M20.12' },
      { id: 'opt_c', label: 'C', text: 'M20.10 — Hallux valgus (acquired), unspecified foot', codeSnippet: 'M20.10' },
      { id: 'opt_d', label: 'D', text: 'Q66.51 — Congenital hallux valgus, right foot', codeSnippet: 'Q66.51' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M20.11',
    icd10cm_code: 'M20.11',
    code_description: 'Hallux valgus (acquired), right foot',
    explanation: 'Acquired hallux valgus is classified under category M20.1 with laterality digits: 1 = right foot (M20.11), 2 = left foot (M20.12). Congenital hallux valgus (Q66.5) is an entirely different category for birth anomalies.',
    documentation_evidence: 'Assessment: Hallux valgus (acquired), right foot.',
    coding_concept: 'Acquired Toe Deformity Specificity & Laterality',
    common_mistake: 'Selecting congenital deformity code (Q66) or confusing right vs left digit.',
    common_trap: 'Mismatched laterality digit.',
    learning_objective: 'Report acquired toe deformities (M20.1-) with correct anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M20.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['foot-ankle', 'hallux-valgus', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-028',
    case_number: 28,
    title: 'Cervical Spondylosis: Exclusion of Radiculopathy / Myelopathy',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Documentation Interpretation',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 62-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Presents with chronic neck stiffness and grinding sensation for 1 year. Denies hand clumsiness, gait unsteadiness, or shooting arm pain.

OBJECTIVE:
Cervical Spine Exam: Crepitus on neck rotation. Active ROM moderately restricted in all planes. Hoffman sign negative; Babinski negative. Sensation, motor strength (5/5), and deep tendon reflexes (2+) in all 4 extremities completely normal.
Cervical Spine Radiographs / MRI: Multi-level disc space narrowing, anterior osteophytes, and facet hypertrophy at C5-C6 and C6-C7 without spinal cord compression or neural foraminal impingement.

ASSESSMENT:
Cervical spondylosis without myelopathy or radiculopathy.

PLAN:
Conservative physical therapy, cervical isometric exercises, ergonomic advice.`,
    question: 'Which ICD-10-CM code reports cervical spondylosis without myelopathy or radiculopathy?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M47.812 — Spondylosis without myelopathy or radiculopathy, cervical region', codeSnippet: 'M47.812' },
      { id: 'opt_b', label: 'B', text: 'M47.12 — Other spondylosis with myelopathy, cervical region', codeSnippet: 'M47.12' },
      { id: 'opt_c', label: 'C', text: 'M47.22 — Other spondylosis with radiculopathy, cervical region', codeSnippet: 'M47.22' },
      { id: 'opt_d', label: 'D', text: 'M54.2 — Cervicalgia', codeSnippet: 'M54.2' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M47.812',
    icd10cm_code: 'M47.812',
    code_description: 'Spondylosis without myelopathy or radiculopathy, cervical region',
    explanation: 'Category M47.812 specifies spondylosis without myelopathy or radiculopathy of the cervical region. Because the examination explicitly confirms absence of cord compression (myelopathy) and root irritation (radiculopathy), M47.812 is the exact code.',
    documentation_evidence: 'Assessment: Cervical spondylosis without myelopathy or radiculopathy.',
    coding_concept: 'Spondylosis Differentiation: Without vs With Myelopathy vs With Radiculopathy',
    common_mistake: 'Assuming myelopathy (M47.12) or radiculopathy (M47.22) without documented neurological findings.',
    common_trap: 'Overcoding myelopathy based on multi-level x-ray changes when physical exam is negative.',
    learning_objective: 'Distinguish between spondylosis without myelopathy/radiculopathy (M47.81-) versus spondylosis with myelopathy (M47.1-) or radiculopathy (M47.2-).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Chapter 13 Category M47',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'cervical', 'spondylosis', 'specificity'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-029',
    case_number: 29,
    title: 'Acute Lateral Meniscus Tear: Sports Injury Initial Encounter',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 20-year-old female
Setting: Orthopedic Sports Injury Clinic

SUBJECTIVE:
College soccer player felt an acute pop and lateral right knee catching when rapidly pivoting during a tournament yesterday. Significant acute swelling within 2 hours.

OBJECTIVE:
Right Knee Exam: Moderate joint effusion. Joint line tenderness specifically along the lateral joint line. McMurray test positive laterally with mechanical catching. Lachman negative (ACL intact).
Urgent MRI: Acute bucket-handle tear of the lateral meniscus, right knee. Collateral and cruciate ligaments intact.

ASSESSMENT:
Acute traumatic bucket-handle tear of lateral meniscus of right knee, initial encounter.

PLAN:
Scheduled for urgent right knee arthroscopic partial meniscectomy vs meniscal repair. Crutches and knee immobilizer provided.`,
    question: 'Which ICD-10-CM code reports an acute bucket-handle tear of the lateral meniscus of the right knee on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.211A — Bucket-handle tear of lateral meniscus, current injury, right knee, initial encounter', codeSnippet: 'S83.211A' },
      { id: 'opt_b', label: 'B', text: 'S83.212A — Bucket-handle tear of lateral meniscus, current injury, left knee, initial encounter', codeSnippet: 'S83.212A' },
      { id: 'opt_c', label: 'C', text: 'M23.211 — Derangement of meniscus due to old tear, right lateral meniscus', codeSnippet: 'M23.211' },
      { id: 'opt_d', label: 'D', text: 'S83.211D — Bucket-handle tear of lateral meniscus, current injury, right knee, subsequent encounter', codeSnippet: 'S83.211D' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.211A',
    icd10cm_code: 'S83.211A',
    code_description: 'Bucket-handle tear of lateral meniscus, current injury, right knee, initial encounter',
    explanation: 'Current acute traumatic bucket-handle tears of the lateral meniscus are classified to subcategory S83.21. The 6th character 1 indicates the right knee, and the 7th character A signifies the initial encounter for active surgical evaluation and management: S83.211A.',
    documentation_evidence: 'Assessment: Acute traumatic bucket-handle tear of lateral meniscus of right knee, initial encounter.',
    coding_concept: 'Acute Meniscal Tear Subtypes & 7th Character Extension',
    common_mistake: 'Using chronic derangement M-code (M23.2) or assigning subsequent encounter 7th character (D).',
    common_trap: 'Confusing bucket-handle tear code with generic meniscus tear.',
    learning_objective: 'Report acute traumatic bucket-handle meniscal tears in Chapter 19 with 7th character encounter extensions.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Chapter 19 Category S83.21',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'meniscus', 'sports-injury', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-030',
    case_number: 30,
    title: 'Acetabular Labral Tear: Hip Joint Pathology',
    specialty: 'Orthopedics',
    body_region: 'Hip',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 27-year-old female
Setting: Hip Preservation Clinic

SUBJECTIVE:
Competitive dancer presents with deep anterior left groin clicking and catching pain with deep hip flexion and internal rotation for 5 months. Denies acute dislocation.

OBJECTIVE:
Left Hip Exam: Positive FADIR test (Flexion, Adduction, Internal Rotation reproduces sharp anterior groin pain). Negative straight leg raise. Normal lumbar spine exam.
MR Arthrogram (Left Hip): Non-traumatic anterosuperior acetabular labral tear with cam-type femoroacetabular impingement (FAI).

ASSESSMENT:
Acetabular labral tear, left hip.

PLAN:
Physical therapy for core and hip abductor control, intra-articular diagnostic hip injection. Discussed hip arthroscopy.`,
    question: 'Which ICD-10-CM code reports non-traumatic acetabular labral tear of the left hip?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M24.152 — Other articular cartilage disorders, left hip', codeSnippet: 'M24.152' },
      { id: 'opt_b', label: 'B', text: 'M25.852 — Other specified joint disorders, left hip', codeSnippet: 'M25.852' },
      { id: 'opt_c', label: 'C', text: 'S73.192A — Other sprain of left hip, initial encounter', codeSnippet: 'S73.192A' },
      { id: 'opt_d', label: 'D', text: 'M25.552 — Pain in left hip', codeSnippet: 'M25.552' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M25.852',
    icd10cm_code: 'M25.852',
    code_description: 'Other specified joint disorders, left hip',
    explanation: 'In the ICD-10-CM Alphabetic Index, non-traumatic tear of the acetabular labrum of the hip directs to "Disorder, joint, specified NEC, hip" (M25.85-). With left laterality (2), the correct code is M25.852.',
    documentation_evidence: 'Assessment: Acetabular labral tear, left hip.',
    coding_concept: 'Index Mapping for Non-traumatic Acetabular Labral Tears',
    common_mistake: 'Using traumatic hip sprain code (S73) for non-traumatic dance/athletic FAI labral tear.',
    common_trap: 'Coding general hip pain rather than index-directed joint disorder code.',
    learning_objective: 'Navigate the ICD-10-CM Alphabetic Index for non-traumatic labral tears of the hip (M25.85-).',
    target_time_seconds: 80,
    reference: 'ICD-10-CM Alphabetic Index & Category M25.85',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['hip', 'labral-tear', 'alphabetic-index', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-031',
    case_number: 31,
    title: 'Physical Therapy for Gait Abnormality & Balance',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Sequencing & Aftercare',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 78-year-old male
Setting: Outpatient Physical Therapy

SUBJECTIVE:
Patient referred by primary care physician for functional rehabilitation due to worsening gait unsteadiness, frequent near-falls, and difficulty navigating thresholds at home.

OBJECTIVE:
Physical Therapy Evaluation: Timed Up and Go (TUG) score 17.5 seconds (elevated fall risk). Dynamic Gait Index (DGI) score 14/24. Narrow base of support with shortened stride length and decreased heel strike. Lower extremity strength 4/5 bilaterally.

ASSESSMENT:
Gait abnormality, unsteadiness on feet, and high fall risk.

PLAN:
Gait training, dynamic balance perturbations, assistive device assessment 2x/week for 6 weeks.`,
    question: 'Which ICD-10-CM code combination is most appropriate for this rehabilitation encounter targeting gait abnormality and mobility deficit?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'R26.81 (Unsteadiness on feet) and R26.89 (Other abnormalities of gait and mobility)', codeSnippet: 'R26.81, R26.89' },
      { id: 'opt_b', label: 'B', text: 'R26.89 — Other abnormalities of gait and mobility', codeSnippet: 'R26.89' },
      { id: 'opt_c', label: 'C', text: 'G81.90 — Hemiplegia, unspecified', codeSnippet: 'G81.90' },
      { id: 'opt_d', label: 'D', text: 'W19.XXXA — Unspecified fall, initial encounter', codeSnippet: 'W19.XXXA' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'R26.89',
    icd10cm_code: 'R26.89',
    code_description: 'Other abnormalities of gait and mobility',
    explanation: 'Code R26.89 specifically captures abnormalities of gait and mobility documented during therapy evaluations. External cause fall codes (W19) are not reported when no actual acute fall injury is being treated.',
    documentation_evidence: 'Assessment: Gait abnormality, unsteadiness on feet, and high fall risk.',
    coding_concept: 'Functional Mobility and Gait Disorder Coding in Therapy Settings',
    common_mistake: 'Coding external cause code for a fall (W19) when the patient has only risk/near-falls without actual injury.',
    common_trap: 'Adding acute external cause injury codes for routine therapy.',
    learning_objective: 'Appropriately assign Chapter 18 mobility and gait abnormality codes (R26.8-) in rehabilitation therapy.',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Chapter 18 Category R26',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['rehabilitation', 'gait', 'mobility', 'physical-therapy'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-032',
    case_number: 32,
    title: 'Lateral Collateral Ligament (LCL) Knee Sprain',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 23-year-old male
Setting: Outpatient Urgent Orthopedics

SUBJECTIVE:
Sustained a varus blow to the medial aspect of his right knee during rugby match yesterday. Complains of lateral knee pain and instability.

OBJECTIVE:
Right Knee Exam: Localized swelling and focal tenderness over the right fibular head and lateral collateral ligament (LCL). Varus stress test at 30° flexion reveals 5mm opening with definitive endpoint compared to contralateral knee. Valgus and Lachman tests stable. No peroneal nerve motor or sensory deficit.

ASSESSMENT:
Sprain of lateral collateral ligament of right knee, initial encounter.

PLAN:
Hinged knee brace locked at 0-90°, crutches for partial weight bearing, physical therapy referral.`,
    question: 'Which ICD-10-CM code reports an acute sprain of the lateral collateral ligament of the right knee on initial presentation?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.421A — Sprain of lateral collateral ligament of right knee, initial encounter', codeSnippet: 'S83.421A' },
      { id: 'opt_b', label: 'B', text: 'S83.411A — Sprain of medial collateral ligament of right knee, initial encounter', codeSnippet: 'S83.411A' },
      { id: 'opt_c', label: 'C', text: 'S83.422A — Sprain of lateral collateral ligament of left knee, initial encounter', codeSnippet: 'S83.422A' },
      { id: 'opt_d', label: 'D', text: 'S83.421D — Sprain of lateral collateral ligament of right knee, subsequent encounter', codeSnippet: 'S83.421D' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.421A',
    icd10cm_code: 'S83.421A',
    code_description: 'Sprain of lateral collateral ligament of right knee, initial encounter',
    explanation: 'Subcategory S83.42 specifies sprain of the lateral collateral ligament (LCL). The 6th character 1 denotes the right knee, and the 7th character A represents the initial encounter for active treatment: S83.421A.',
    documentation_evidence: 'Assessment: Sprain of lateral collateral ligament of right knee, initial encounter.',
    coding_concept: 'Knee Collateral Ligament Injury Coding: Medial (S83.41) vs Lateral (S83.42)',
    common_mistake: 'Confusing MCL (S83.41) with LCL (S83.42) or selecting subsequent encounter character.',
    common_trap: 'Mismatched ligament subcategory (medial vs lateral).',
    learning_objective: 'Distinguish between medial (S83.41-) and lateral (S83.42-) knee collateral ligament sprain codes.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 19 Category S83.42',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'lcl', 'sprain', 'sports-injury', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-033',
    case_number: 33,
    title: 'Lumbar Spondylolisthesis: Anatomical Site',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 50-year-old female
Setting: Spine Surgery Outpatient Clinic

SUBJECTIVE:
Patient reports lower back aching exacerbated with lumbar extension and standing. Denies lower extremity paresthesias or weakness.

OBJECTIVE:
Lumbar Spine: Palpable "step-off" at the L4-L5 interspace. Pain with lumbar hyperextension. Motor and sensory exams intact in bilateral lower extremities.
Standing Lateral Lumbar Radiographs: Grade 1 anterolisthesis (forward slip ~18%) of L4 on L5 secondary to facet arthrosis without pars interarticularis defect.

ASSESSMENT:
Degenerative spondylolisthesis, lumbar region.

PLAN:
Physical therapy for core stability and pelvic tilt exercises, avoid repetitive hyperextension.`,
    question: 'Which ICD-10-CM code reports spondylolisthesis of the lumbar region?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M43.16 — Spondylolisthesis, lumbar region', codeSnippet: 'M43.16' },
      { id: 'opt_b', label: 'B', text: 'M43.12 — Spondylolisthesis, cervical region', codeSnippet: 'M43.12' },
      { id: 'opt_c', label: 'C', text: 'M43.06 — Spondylolysis, lumbar region', codeSnippet: 'M43.06' },
      { id: 'opt_d', label: 'D', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M43.16',
    icd10cm_code: 'M43.16',
    code_description: 'Spondylolisthesis, lumbar region',
    explanation: 'Category M43.1 classifies spondylolisthesis. The 5th character 6 designates the lumbar region: M43.16. Spondylolysis (pars defect without slip) is coded to M43.0-.',
    documentation_evidence: 'Assessment: Degenerative spondylolisthesis, lumbar region.',
    coding_concept: 'Spondylolisthesis (Slip, M43.1) vs Spondylolysis (Pars Defect, M43.0)',
    common_mistake: 'Confusing spondylolisthesis (M43.1) with spondylolysis (M43.0).',
    common_trap: 'Confusing listhesis with lysis.',
    learning_objective: 'Distinguish between spondylolisthesis (M43.1-) and spondylolysis (M43.0-) with appropriate spinal region characters.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M43.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['spine', 'spondylolisthesis', 'lumbar'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-034',
    case_number: 34,
    title: 'Dupuytren Contracture: Palmar Fascial Fibromatosis',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 65-year-old male
Setting: Hand Surgery Clinic

SUBJECTIVE:
Presents with progressive thickening in the palm of his right hand and inability to lay his right palm flat on a table (positive tabletop test) for 9 months.

OBJECTIVE:
Right Hand Exam: Palpable pretendinous cord and nodule in the right palm leading to the 4th (ring) and 5th (small) digits with a 30° flexion contracture at the 4th MCP joint. Skin puckering present. Left hand normal.

ASSESSMENT:
Dupuytren contracture (Palmar fascial fibromatosis), right hand.

PLAN:
Discussed collagenase clostridium histolyticum injection vs open partial palmar fasciectomy. Patient elects to schedule collagenase injection.`,
    question: 'Which ICD-10-CM code reports Dupuytren contracture (palmar fascial fibromatosis)?',
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
    explanation: 'Category M72.0 specifically identifies palmar fascial fibromatosis (Dupuytren disease/contracture). In ICD-10-CM, M72.0 does not contain laterality sub-digits in the Tabular list.',
    documentation_evidence: 'Assessment: Dupuytren contracture (Palmar fascial fibromatosis), right hand.',
    coding_concept: 'Palmar Fibromatosis (M72.0) vs General Joint Contracture (M24.5)',
    common_mistake: 'Using generic joint contracture code (M24.541) instead of the specific etiology code M72.0.',
    common_trap: 'Confusing Dupuytren contracture with trigger finger.',
    learning_objective: 'Identify specific fibroproliferative disorder codes like M72.0 for Dupuytren contracture.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M72.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['upper-extremity', 'hand', 'dupuytren'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-035',
    case_number: 35,
    title: 'Glenohumeral Joint Primary Osteoarthritis',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 73-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with deep right shoulder ache and stiffness for 2 years, worse with reaching across his body. Left shoulder is asymptomatic.

OBJECTIVE:
Right Shoulder: Crepitus on glenohumeral rotation. Active flexion 100°, external rotation 20°.
X-Rays (Right Shoulder): Significant glenohumeral joint space narrowing, subchondral sclerosis, and large inferior humeral head osteophytes ("goat beard" spur). Normal AC joint.

ASSESSMENT:
Primary osteoarthritis of right shoulder (Glenohumeral joint).

PLAN:
Intra-articular steroid injection, discussion of anatomic total shoulder arthroplasty if symptoms remain severe.`,
    question: 'Which ICD-10-CM code reports primary osteoarthritis of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M19.011 — Primary osteoarthritis, right shoulder', codeSnippet: 'M19.011' },
      { id: 'opt_b', label: 'B', text: 'M19.012 — Primary osteoarthritis, left shoulder', codeSnippet: 'M19.012' },
      { id: 'opt_c', label: 'C', text: 'M17.11 — Primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_d', label: 'D', text: 'M25.511 — Pain in right shoulder', codeSnippet: 'M25.511' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M19.011',
    icd10cm_code: 'M19.011',
    code_description: 'Primary osteoarthritis, right shoulder',
    explanation: 'Primary osteoarthritis of the shoulder is classified under category M19.01. The 6th character 1 specifies the right shoulder: M19.011. (Note that M16 is hip and M17 is knee).',
    documentation_evidence: 'Assessment: Primary osteoarthritis of right shoulder.',
    coding_concept: 'Osteoarthritis Category Distinction by Joint (M16 vs M17 vs M19)',
    common_mistake: 'Using knee category M17 or general joint pain code.',
    common_trap: 'Mismatched joint category or laterality character.',
    learning_objective: 'Differentiate osteoarthritis categories across major joints (M16 Hip, M17 Knee, M19.01 Shoulder).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M19.01',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'osteoarthritis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-036',
    case_number: 36,
    title: 'Total Hip Arthroplasty Postoperative Rehabilitation',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Coding Judgment',
    primary_skill: 'Sequencing & Aftercare',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 70-year-old female
Setting: Physical Therapy Outpatient Rehabilitation

SUBJECTIVE:
Patient arrives for outpatient physical therapy 4 weeks following right total hip arthroplasty (THA) for severe end-stage osteoarthritis. Reports good pain control and seeks to progress off walker.

OBJECTIVE:
Right Hip Exam: Well-healed anterolateral surgical scar. Hip precautions maintained. Active-assisted hip flexion to 90°, abduction 30°. Ambulates with standard rolling walker with mild gluteus medius lurch.

ASSESSMENT:
Encounter for physical therapy aftercare following right joint replacement surgery, right hip.

PLAN:
Progress from rolling walker to single point cane, closed kinetic chain hip abductor strengthening 2x weekly for 6 weeks.`,
    question: 'What is the appropriate ICD-10-CM code sequencing for this post-THA rehabilitation encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'Z47.1 (Aftercare following joint replacement surgery) and Z96.641 (Presence of right artificial hip joint)', codeSnippet: 'Z47.1, Z96.641' },
      { id: 'opt_b', label: 'B', text: 'M16.11 — Primary osteoarthritis, right hip', codeSnippet: 'M16.11' },
      { id: 'opt_c', label: 'C', text: 'Z96.641 as primary code alone', codeSnippet: 'Z96.641' },
      { id: 'opt_d', label: 'D', text: 'T84.84XA — Pain due to internal prosthetic device, initial encounter', codeSnippet: 'T84.84XA' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'Z47.1, Z96.641',
    icd10cm_code: 'Z47.1, Z96.641',
    code_description: 'Encounter for aftercare following joint replacement surgery; Presence of right artificial hip joint',
    explanation: 'Z47.1 is designated as the primary reason for aftercare following joint replacement surgery. Z96.641 is sequenced secondary as an informational status code specifying the presence of the right artificial hip joint.',
    documentation_evidence: 'Assessment: Encounter for physical therapy aftercare following right joint replacement surgery, right hip.',
    coding_concept: 'Post-Arthroplasty Rehabilitation Aftercare and Prosthetic Status Sequencing',
    common_mistake: 'Sequencing the artificial hip joint status code (Z96.641) as primary, or re-coding pre-surgical osteoarthritis.',
    common_trap: 'Sequencing status Z96 code first instead of aftercare Z47.1.',
    learning_objective: 'Apply the correct sequence of aftercare code (Z47.1) followed by joint-specific status code (Z96.64-) in postoperative therapy.',
    target_time_seconds: 80,
    reference: 'ICD-10-CM Guidelines Section I.C.21.c.7 & Category Z47/Z96',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['rehabilitation', 'aftercare', 'hip', 'joint-replacement'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-037',
    case_number: 37,
    title: 'Non-Traumatic Quadriceps Muscle Rupture',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 60-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Patient with chronic kidney disease on dialysis felt a pop in his right anterior thigh while stepping down a low step 3 days ago. Unable to bear weight or extend the knee.

OBJECTIVE:
Right Thigh / Knee: Palpable suprapatellar defect 2 cm proximal to the superior patellar pole. Complete inability to perform active straight leg raise (extensor mechanism disruption). Patella baja noted on plain radiographs. MRI demonstrates non-traumatic complete rupture of the right rectus femoris / quadriceps muscle-tendon junction.

ASSESSMENT:
Non-traumatic rupture of right quadriceps muscle.

PLAN:
Admission for primary surgical repair of the right quadriceps tendon.`,
    question: 'Which ICD-10-CM code reports non-traumatic rupture of muscle of the right thigh?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M62.151 — Other rupture of muscle (nontraumatic), right thigh', codeSnippet: 'M62.151' },
      { id: 'opt_b', label: 'B', text: 'S76.111A — Strain of quadriceps muscle, fascia and tendon of right thigh, initial encounter', codeSnippet: 'S76.111A' },
      { id: 'opt_c', label: 'C', text: 'M62.152 — Other rupture of muscle (nontraumatic), left thigh', codeSnippet: 'M62.152' },
      { id: 'opt_d', label: 'D', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M62.151',
    icd10cm_code: 'M62.151',
    code_description: 'Other rupture of muscle (nontraumatic), right thigh',
    explanation: 'Non-traumatic rupture of muscle is classified under category M62.1. The 5th and 6th characters specify the right thigh: M62.151. Acute traumatic muscle strains are in Chapter 19 (S76.1-).',
    documentation_evidence: 'Assessment: Non-traumatic rupture of right quadriceps muscle.',
    coding_concept: 'Non-traumatic Muscle Ruptures (M62.1-) vs Traumatic Muscle Strains (S76)',
    common_mistake: 'Using traumatic strain code (S76) when the clinical documentation specifies non-traumatic tendon degeneration/rupture.',
    common_trap: 'Selecting traumatic S-code for spontaneous non-traumatic rupture.',
    learning_objective: 'Distinguish between non-traumatic muscle ruptures in Chapter 13 (M62.1-) and acute traumatic muscle injuries in Chapter 19 (S76.-).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M62.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['knee', 'muscle-rupture', 'non-traumatic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-038',
    case_number: 38,
    title: 'Fibromyalgia: Generalized Musculoskeletal Pain',
    specialty: 'General',
    body_region: 'General Musculoskeletal',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 41-year-old female
Setting: Rheumatology Clinic

SUBJECTIVE:
Presents with diffuse body-wide musculoskeletal aching, unrefreshing sleep, chronic fatigue, and cognitive fog for 8 months. Has seen multiple specialists without discrete joint swelling.

OBJECTIVE:
Physical Exam: Tenderness on palpation at 14 of 18 classic tender point sites across the neck, shoulders, chest, elbows, hips, and knees without active synovitis, joint effusion, or muscle weakness. ESR, CRP, ANA, and Rheumatoid Factor all within normal limits.

ASSESSMENT:
Fibromyalgia.

PLAN:
Low-dose duloxetine, graded aerobic exercise program, sleep hygiene counseling.`,
    question: 'Which ICD-10-CM code reports fibromyalgia?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M79.7 — Fibromyalgia', codeSnippet: 'M79.7' },
      { id: 'opt_b', label: 'B', text: 'M79.1 — Myalgia', codeSnippet: 'M79.1' },
      { id: 'opt_c', label: 'C', text: 'M25.50 — Pain in unspecified joint', codeSnippet: 'M25.50' },
      { id: 'opt_d', label: 'D', text: 'R53.83 — Other fatigue', codeSnippet: 'R53.83' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M79.7',
    icd10cm_code: 'M79.7',
    code_description: 'Fibromyalgia',
    explanation: 'Fibromyalgia is reported with code M79.7. Associated symptoms such as generalized myalgia (M79.1) and fatigue (R53.83) are inherent to fibromyalgia and should not be coded separately per Guideline I.B.4.',
    documentation_evidence: 'Assessment: Fibromyalgia.',
    coding_concept: 'Systemic Fibromyalgia vs Non-specific Myalgia Symptoms',
    common_mistake: 'Adding separate codes for myalgia (M79.1) or joint pain (M25.50) alongside fibromyalgia.',
    common_trap: 'Redundant symptom coding for inherent fibromyalgia fatigue and aching.',
    learning_objective: 'Report fibromyalgia using M79.7 without unneeded incidental symptom codes.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M79.7 & Guideline I.B.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['general-msk', 'fibromyalgia', 'symptom-vs-diagnosis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-039',
    case_number: 39,
    title: 'Medial Collateral Ligament (MCL) Knee Sprain',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 19-year-old male
Setting: Outpatient Sports Orthopedics

SUBJECTIVE:
Sustained a valgus contact blow to the lateral aspect of his left knee while being tackled in football yesterday. Heard no pop.

OBJECTIVE:
Left Knee Exam: Localized swelling and tenderness along the medial femoral condyle and medial joint line. Valgus stress test at 30° knee flexion demonstrates pain and 4mm medial laxity with firm endpoint (Grade 1-2 MCL sprain). Lachman negative.

ASSESSMENT:
Sprain of medial collateral ligament of left knee, initial encounter.

PLAN:
Hinged knee brace, crutches, physical therapy for early quadriceps activation.`,
    question: 'Which ICD-10-CM code reports an acute sprain of the medial collateral ligament of the left knee on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.412A — Sprain of medial collateral ligament of left knee, initial encounter', codeSnippet: 'S83.412A' },
      { id: 'opt_b', label: 'B', text: 'S83.411A — Sprain of medial collateral ligament of right knee, initial encounter', codeSnippet: 'S83.411A' },
      { id: 'opt_c', label: 'C', text: 'S83.422A — Sprain of lateral collateral ligament of left knee, initial encounter', codeSnippet: 'S83.422A' },
      { id: 'opt_d', label: 'D', text: 'S83.412D — Sprain of medial collateral ligament of left knee, subsequent encounter', codeSnippet: 'S83.412D' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.412A',
    icd10cm_code: 'S83.412A',
    code_description: 'Sprain of medial collateral ligament of left knee, initial encounter',
    explanation: 'Subcategory S83.41 specifically denotes an MCL sprain of the knee. The 6th character 2 designates the left knee, and the 7th character A represents the initial active encounter: S83.412A.',
    documentation_evidence: 'Assessment: Sprain of medial collateral ligament of left knee, initial encounter.',
    coding_concept: 'MCL Knee Sprain Laterality and 7th Character Extension',
    common_mistake: 'Confusing right (1) with left (2) or selecting subsequent encounter extension D.',
    common_trap: 'Mismatched laterality digit.',
    learning_objective: 'Assign correct ligament (S83.41-) and encounter phase (A) for acute MCL injuries.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 19 Category S83.41',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'mcl', 'sprain', 'sports-injury', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-040',
    case_number: 40,
    title: 'Polymyalgia Rheumatica (PMR)',
    specialty: 'General',
    body_region: 'General Musculoskeletal',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 71-year-old female
Setting: Rheumatology Outpatient Clinic

SUBJECTIVE:
Presents with acute onset of severe bilateral shoulder girdle and pelvic girdle stiffness and aching for 3 weeks. Takes 2 hours to get out of bed in the morning. Denies temporal headache, scalp tenderness, visual changes, or jaw claudication (no symptoms of giant cell arteritis).

OBJECTIVE:
Exam: Active shoulder abduction limited bilaterally to 90° by pain and stiffness; passive ROM full. Symmetrical tenderness across shoulder and hip girdles. No peripheral joint synovitis.
Labs: ESR markedly elevated at 78 mm/hr (normal <30); CRP elevated at 34 mg/L.

ASSESSMENT:
Polymyalgia rheumatica (PMR).

PLAN:
Initiated low-dose oral prednisone 15 mg daily with dramatic symptomatic improvement expected within 48-72 hours. Follow up in 2 weeks.`,
    question: 'Which ICD-10-CM code reports polymyalgia rheumatica?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M35.3 — Polymyalgia rheumatica', codeSnippet: 'M35.3' },
      { id: 'opt_b', label: 'B', text: 'M79.7 — Fibromyalgia', codeSnippet: 'M79.7' },
      { id: 'opt_c', label: 'C', text: 'M06.9 — Rheumatoid arthritis, unspecified', codeSnippet: 'M06.9' },
      { id: 'opt_d', label: 'D', text: 'M79.1 — Myalgia', codeSnippet: 'M79.1' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M35.3',
    icd10cm_code: 'M35.3',
    code_description: 'Polymyalgia rheumatica',
    explanation: 'Polymyalgia rheumatica is reported with code M35.3 under Chapter 13 systemic connective tissue disorders. Fibromyalgia (M79.7) and generic myalgia (M79.1) are incorrect.',
    documentation_evidence: 'Assessment: Polymyalgia rheumatica (PMR).',
    coding_concept: 'Polymyalgia Rheumatica (M35.3) vs Fibromyalgia (M79.7)',
    common_mistake: 'Confusing polymyalgia rheumatica (M35.3) with fibromyalgia (M79.7).',
    common_trap: 'Selecting fibromyalgia when clinical inflammatory markers and presentation establish PMR.',
    learning_objective: 'Accurately assign M35.3 for systemic inflammatory polymyalgia rheumatica.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M35.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['general-msk', 'rheumatology', 'pmr'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
];
