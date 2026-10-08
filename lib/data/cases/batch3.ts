import { CaseItem } from '../../types';

export const BATCH_3_CASES: CaseItem[] = [
  {
    id: 'case-041',
    case_number: 41,
    title: 'Ankle Injury: Resisting Specificity Traps in Incomplete Records',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Documentation Interpretation',
    primary_skill: 'Documentation Interpretation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 24-year-old male
Setting: Urgent Orthopedic Walk-in

SUBJECTIVE:
Patient twisted his right ankle during a recreational soccer match yesterday. Complains of swelling and lateral pain when bearing weight. Denies pop sound or prior ankle injuries.

OBJECTIVE:
Right Ankle: Moderate swelling and ecchymosis over the lateral malleolar region. Tenderness on palpation over anterior talofibular area. Range of motion limited by pain.
Radiographs (3 views, right ankle): No evidence of fracture, dislocation, or joint space widening.
Physician Documentation: "Right ankle injury / sprain. Stable on stress exam."

PLAN:
RICE protocol, air-stirrup ankle brace, weight-bearing as tolerated with crutches for 48 hours. Follow up in 10 days if pain persists.`,
    question: 'Given the provider documentation of "Right ankle injury / sprain" without specified ligament identification, what is the appropriate coding selection?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S93.411A — Sprain of calcaneofibular ligament of right ankle, initial encounter', codeSnippet: 'S93.411A' },
      { id: 'opt_b', label: 'B', text: 'S93.491A — Sprain of other ligament of right ankle, initial encounter', codeSnippet: 'S93.491A' },
      { id: 'opt_c', label: 'C', text: 'S93.401A — Sprain of unspecified ligament of right ankle, initial encounter', codeSnippet: 'S93.401A' },
      { id: 'opt_d', label: 'D', text: 'S82.891A — Other fracture of right lower leg, initial encounter', codeSnippet: 'S82.891A' },
    ],
    correct_answer: 'opt_c',
    correct_option: 'C',
    code: 'S93.401A',
    icd10cm_code: 'S93.401A',
    code_description: 'Sprain of unspecified ligament of right ankle, initial encounter',
    explanation: 'Although the physical exam mentions tenderness in the anterior talofibular area, the physician assessment specifically states "Right ankle injury / sprain" without diagnostic confirmation of a specific ligament. Coders must code according to the provider definitive diagnostic statement and not manufacture anatomical specificity beyond what is established (Guideline I.B.1). S93.401A is the supported code.',
    documentation_evidence: 'Physician Assessment: Right ankle injury / sprain.',
    coding_concept: 'Code the Documentation, Never Manufacture Specificity (Guideline I.B.1 & I.B.14)',
    common_mistake: 'Assuming a specific ligament code (calcaneofibular or anterior talofibular) based on general exam notes rather than provider diagnostic statement.',
    common_trap: 'Manufacturing ligament specificity from exam hints instead of assessment.',
    learning_objective: 'Understand when an unspecified ligament code is compliant due to physician diagnostic phrasing.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Guideline I.B.1 (Level of Detail in Coding) & Category S93.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'documentation-gap', 'injury', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-042',
    case_number: 42,
    title: 'Distal Radius Fracture Follow-up: 7th Character Phase of Care',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 45-year-old female
Setting: Orthopedic Clinic Follow-Up

SUBJECTIVE:
Returns for 6-week follow-up for closed, non-displaced fracture of the right distal radius sustained in a slip-and-fall. Short arm cast was removed last week. Now transitioning to a removable splint and starting active wrist range of motion. Minimal residual discomfort.

OBJECTIVE:
Right Wrist: Mild dorsal swelling, no gross deformity. Non-tender over anatomical snuffbox and distal radius. Wrist flexion 45°, extension 50°. Finger motion full.
X-Rays (Right Wrist): Fracture line consolidating well with bridging callus formation, anatomical alignment maintained. Routine healing documented.

ASSESSMENT:
Closed fracture of right distal radius, routine healing, subsequent encounter.

PLAN:
Discontinue rigid immobilization. Begin gentle wrist flexor/extensor stretching and light functional activities. Follow-up in 6 weeks.`,
    question: 'Which 7th character extension accurately designates the phase of care for this routine fracture healing follow-up visit?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S52.501A — Unspecified fracture of lower end of right radius, initial encounter', codeSnippet: 'S52.501A' },
      { id: 'opt_b', label: 'B', text: 'S52.501D — Unspecified fracture of lower end of right radius, subsequent encounter for closed fracture with routine healing', codeSnippet: 'S52.501D' },
      { id: 'opt_c', label: 'C', text: 'S52.501S — Unspecified fracture of lower end of right radius, sequela', codeSnippet: 'S52.501S' },
      { id: 'opt_d', label: 'D', text: 'Z47.89 — Encounter for other orthopedic aftercare', codeSnippet: 'Z47.89' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'S52.501D',
    icd10cm_code: 'S52.501D',
    code_description: 'Unspecified fracture of lower end of right radius, subsequent encounter for closed fracture with routine healing',
    explanation: 'Under ICD-10-CM Guidelines Section I.C.19.a & I.C.19.c, traumatic injuries use 7th character extensions to represent the phase of treatment. Character "A" is for active initial treatment. Character "D" is for subsequent encounters after active care has finished and the patient is receiving routine healing care (e.g. cast removal, routine follow-up). Aftercare Z codes are NOT used for injuries when 7th characters exist.',
    documentation_evidence: 'Assessment: Closed fracture of right distal radius, routine healing, subsequent encounter.',
    coding_concept: '7th Character Encounter Codes: Initial (A) vs Subsequent (D) vs Sequela (S) (Guideline I.C.19.a)',
    common_mistake: 'Using the initial encounter 7th character "A" repeatedly on follow-up visits or attempting to use an aftercare Z code for a traumatic fracture.',
    common_trap: 'Using initial encounter "A" for follow-up visits.',
    learning_objective: 'Correctly differentiate between initial (A), subsequent (D), and sequela (S) encounter extensions in injury coding.',
    target_time_seconds: 80,
    reference: 'ICD-10-CM Guidelines Section I.C.19.a (7th Character Extensions for Chapter 19)',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'fracture', '7th-character', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-043',
    case_number: 43,
    title: 'Outpatient Ambiguity: "Possible / Rule Out" Guidelines',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Documentation Interpretation',
    primary_skill: 'Documentation Interpretation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 38-year-old male
Setting: Hospital-based Outpatient Orthopedic Clinic

SUBJECTIVE:
Patient presents with 2 months of anterior right shoulder pain worsened when performing overhead bench press. Denies numbness or tingling.

OBJECTIVE:
Right Shoulder Exam: Full active and passive range of motion. Pain on resisted forward elevation (Speed test positive) and localized tenderness over the bicipital groove. Neer impingement sign positive.

ASSESSMENT:
Right shoulder pain and bicipital tendinitis. Possible subacromial impingement vs rotator cuff tear.

PLAN:
Subacromial/biceps tendon sheath injection performed under ultrasound guidance. Scheduled diagnostic ultrasound. Follow up in 4 weeks.`,
    question: 'Applying official ICD-10-CM outpatient coding guidelines, how should the documented diagnoses be reported?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.101 (Rotator cuff tear) and M75.41 (Impingement syndrome of right shoulder)', codeSnippet: 'M75.101, M75.41' },
      { id: 'opt_b', label: 'B', text: 'M75.21 — Bicipital tendinitis, right shoulder', codeSnippet: 'M75.21' },
      { id: 'opt_c', label: 'C', text: 'M25.511 — Pain in right shoulder alone', codeSnippet: 'M25.511' },
      { id: 'opt_d', label: 'D', text: 'M75.21 (Bicipital tendinitis, right shoulder) AND M75.101 (Rotator cuff tear)', codeSnippet: 'M75.21, M75.101' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M75.21',
    icd10cm_code: 'M75.21',
    code_description: 'Bicipital tendinitis, right shoulder',
    explanation: 'ICD-10-CM Guideline IV.H explicitly states: "Do not code diagnoses documented as \'probable\', \'suspected\', \'questionable\', \'rule out\', \'compatible with\', \'consistent with\', or \'working diagnosis\' or other similar terms indicating uncertainty." Bicipital tendinitis of right shoulder (M75.21) was definitively diagnosed, while impingement and rotator cuff tear were documented as "possible vs" and cannot be reported in an outpatient setting.',
    documentation_evidence: 'Assessment: Right shoulder pain and bicipital tendinitis. Possible subacromial impingement vs rotator cuff tear.',
    coding_concept: 'Prohibition of Uncertain Diagnosis Coding in Outpatient Settings (Guideline IV.H)',
    common_mistake: 'Coding "possible" or "rule out" conditions as if they are confirmed diagnoses.',
    common_trap: 'Coding suspected conditions in outpatient setting.',
    learning_objective: 'Strictly apply outpatient coding rules regarding uncertain and differential diagnoses.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Official Guidelines Section IV.H (Uncertain Diagnosis in Outpatient)',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'outpatient', 'uncertainty', 'tendinitis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-044',
    case_number: 44,
    title: 'Rotator Cuff Calcific Tendinitis: Specific Classification',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 49-year-old female
Setting: Outpatient Orthopedics

SUBJECTIVE:
Acute severe left shoulder pain awakening patient from sleep 2 days ago. Pain is debilitating with minimal movement.

OBJECTIVE:
Left Shoulder Exam: Exquisite tenderness over the greater tuberosity. Active elevation severely limited to 40° by acute pain.
X-Rays (Left Shoulder): Dense, rounded, well-defined hydroxyapatite calcific deposit measuring 1.4 cm within the left supraspinatus tendon. No glenohumeral arthritis.

ASSESSMENT:
Calcific tendinitis of left shoulder (Calcific tendinopathy of rotator cuff).

PLAN:
Ultrasound-guided calcific deposit barbotage (lavage/aspiration) and subacromial corticosteroid injection. Oral NSAID prescribed.`,
    question: 'Which ICD-10-CM code specifically reports calcific tendinitis of the left shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.31 — Calcific tendinitis of right shoulder', codeSnippet: 'M75.31' },
      { id: 'opt_b', label: 'B', text: 'M75.32 — Calcific tendinitis of left shoulder', codeSnippet: 'M75.32' },
      { id: 'opt_c', label: 'C', text: 'M75.102 — Unspecified rotator cuff tear of left shoulder', codeSnippet: 'M75.102' },
      { id: 'opt_d', label: 'D', text: 'M25.512 — Pain in left shoulder', codeSnippet: 'M25.512' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M75.32',
    icd10cm_code: 'M75.32',
    code_description: 'Calcific tendinitis of left shoulder',
    explanation: 'Calcific tendinitis of the shoulder is classified under category M75.3. Sub-digit 2 specifies the left shoulder: M75.32.',
    documentation_evidence: 'Assessment: Calcific tendinitis of left shoulder.',
    coding_concept: 'Calcific Tendinitis (M75.3) Specificity with Laterality',
    common_mistake: 'Assigning right shoulder code (M75.31) or general rotator cuff tear code.',
    common_trap: 'Mismatched laterality digit.',
    learning_objective: 'Report calcific tendinitis of the shoulder using category M75.3- with precise laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'calcific-tendinitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-045',
    case_number: 45,
    title: 'Anterior Cruciate Ligament (ACL) Acute Traumatic Tear',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 18-year-old male
Setting: Orthopedic Sports Injury Clinic

SUBJECTIVE:
High school basketball player felt a loud pop and immediate knee collapse when landing from a rebound yesterday. Massive knee swelling noted within 1 hour.

OBJECTIVE:
Right Knee Exam: Large hemarthrosis (tense joint effusion). Lachman test positive (8mm anterior translation without firm endpoint). Anterior drawer test positive. Pivot shift test positive.
Urgent MRI: Complete non-retracted acute mid-substance tear of the right anterior cruciate ligament (ACL). Bone contusions on lateral femoral condyle and posterior tibial plateau.

ASSESSMENT:
Acute traumatic tear of anterior cruciate ligament of right knee, initial encounter.

PLAN:
Arthrocentesis to relieve hemarthrosis, crutches, prehabilitation physical therapy. Scheduled for right arthroscopic ACL reconstruction with bone-patellar tendon-bone autograft.`,
    question: 'Which ICD-10-CM code reports an acute traumatic tear of the anterior cruciate ligament of the right knee on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.511A — Sprain of anterior cruciate ligament of right knee, initial encounter', codeSnippet: 'S83.511A' },
      { id: 'opt_b', label: 'B', text: 'S83.512A — Sprain of anterior cruciate ligament of left knee, initial encounter', codeSnippet: 'S83.512A' },
      { id: 'opt_c', label: 'C', text: 'M23.611 — Other spontaneous disruption of anterior cruciate ligament of right knee', codeSnippet: 'M23.611' },
      { id: 'opt_d', label: 'D', text: 'S83.511D — Sprain of anterior cruciate ligament of right knee, subsequent encounter', codeSnippet: 'S83.511D' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.511A',
    icd10cm_code: 'S83.511A',
    code_description: 'Sprain of anterior cruciate ligament of right knee, initial encounter',
    explanation: 'In ICD-10-CM, acute traumatic tears of the cruciate ligaments are classified under "Sprain of cruciate ligament" (S83.5-). Subcategory S83.51 specifies the anterior cruciate ligament. The 6th character 1 denotes right knee, and 7th character A represents the initial encounter for surgical planning: S83.511A.',
    documentation_evidence: 'Assessment: Acute traumatic tear of anterior cruciate ligament of right knee, initial encounter.',
    coding_concept: 'ACL Acute Injury Coding & 7th Character Initial Extension',
    common_mistake: 'Using spontaneous disruption M-code (M23.6) for an acute sports injury or assigning subsequent extension D.',
    common_trap: 'Mismatched laterality or encounter phase character.',
    learning_objective: 'Correctly report acute traumatic ACL tears in Chapter 19 (S83.51-) with laterality and initial encounter extension.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Chapter 19 Category S83.51',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'acl', 'sports-injury', '7th-character', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-046',
    case_number: 46,
    title: 'Plantar Fasciitis with Incidental Calcaneal Spur',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 47-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with acute flare of right heel pain for 3 weeks. Symptoms worst with first morning steps and prolonged weight bearing.

OBJECTIVE:
Right Foot Exam: Marked point tenderness over the plantar medial calcaneal insertion. Pain with passive toe dorsiflexion.
Standing X-Rays: Incidental, small 2mm non-fractured plantar calcaneal traction spur.

ASSESSMENT:
Plantar fasciitis, right foot. Incidental calcaneal spur.

PLAN:
Plantar fascia specific stretching, custom orthotics, night splints.`,
    question: 'How should the primary reason for this encounter be reported in ICD-10-CM?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M72.2 — Plantar fascial fibromatosis (Plantar fasciitis)', codeSnippet: 'M72.2' },
      { id: 'opt_b', label: 'B', text: 'M77.31 — Calcaneal spur, right foot', codeSnippet: 'M77.31' },
      { id: 'opt_c', label: 'C', text: 'M77.31 (Calcaneal spur) sequenced as primary, and M72.2 secondary', codeSnippet: 'M77.31, M72.2' },
      { id: 'opt_d', label: 'D', text: 'M79.671 — Pain in right foot', codeSnippet: 'M79.671' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M72.2',
    icd10cm_code: 'M72.2',
    code_description: 'Plantar fascial fibromatosis (Plantar fasciitis)',
    explanation: 'The primary active condition treated is plantar fasciitis (M72.2). The physician explicitly notes that the radiographic calcaneal spur is incidental. Sequencing calcaneal spur as primary misrepresents the chief reason for encounter.',
    documentation_evidence: 'Assessment: Plantar fasciitis, right foot. Incidental calcaneal spur.',
    coding_concept: 'Primary Condition Sequencing vs Incidental Radiographic Findings',
    common_mistake: 'Sequencing the incidental calcaneal spur (M77.31) as the primary diagnosis.',
    common_trap: 'Prioritizing incidental x-ray spur over active clinical plantar fasciitis.',
    learning_objective: 'Sequence active clinical diagnoses (M72.2) over incidental radiographic findings.',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Guideline Section II & Category M72.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['foot-ankle', 'plantar-fasciitis', 'sequencing', 'incidental-finding'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-047',
    case_number: 47,
    title: 'Lumbar Disc Herniation with Radiculopathy: Combination Code',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 42-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Presents with severe lower back and left leg pain radiating past the knee into the dorsum of the left foot and great toe for 3 weeks.

OBJECTIVE:
Exam: Positive left straight leg raise (SLR) at 30° producing radiating electric shock sensation into left L5 dermatome. Weakness in left great toe extensor hallucis longus (EHL strength 4/5). Diminished sensation over left lateral calf and first web space.
MRI Lumbar Spine: Large left paracentral disc extrusion at L4-L5 causing marked compression of the traversing left L5 nerve root.

ASSESSMENT:
L4-L5 lumbar disc herniation with left L5 radiculopathy.

PLAN:
Left L4-L5 transforaminal epidural steroid injection under fluoroscopy. Scheduled neurosurgical consultation for microdiscectomy.`,
    question: 'Which single ICD-10-CM combination code reports lumbar intervertebral disc disorder with radiculopathy?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M51.16 — Intervertebral disc disorders with radiculopathy, lumbar region', codeSnippet: 'M51.16' },
      { id: 'opt_b', label: 'B', text: 'M51.26 (Lumbar disc displacement) AND M54.16 (Radiculopathy, lumbar region)', codeSnippet: 'M51.26, M54.16' },
      { id: 'opt_c', label: 'C', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
      { id: 'opt_d', label: 'D', text: 'M54.32 — Sciatica, left side alone', codeSnippet: 'M54.32' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M51.16',
    icd10cm_code: 'M51.16',
    code_description: 'Intervertebral disc disorders with radiculopathy, lumbar region',
    explanation: 'ICD-10-CM provides combination codes in category M51.1 for disc disorders with radiculopathy. M51.16 specifically combines lumbar disc displacement and lumbar radiculopathy into a single definitive code. Assigning two separate codes (M51.26 + M54.16) violates combination coding principles.',
    documentation_evidence: 'Assessment: L4-L5 lumbar disc herniation with left L5 radiculopathy.',
    coding_concept: 'Combination Codes for Disc Disorders with Radiculopathy (Category M51.1)',
    common_mistake: 'Double coding separate disc herniation (M51.26) and radiculopathy (M54.16) codes when a combination code exists.',
    common_trap: 'Splitting combination disc + radiculopathy codes.',
    learning_objective: 'Identify and apply combination codes in category M51.1- for intervertebral disc disorders with radiculopathy.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Chapter 13 Category M51.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'disc-herniation', 'radiculopathy', 'combination-code'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-048',
    case_number: 48,
    title: 'Posterior Cruciate Ligament (PCL) Sprain: Initial Encounter',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 26-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Driver involved in a low-speed motor vehicle collision 3 days ago whose flexed left knee struck the dashboard. Complains of posterior knee pain and stiffness.

OBJECTIVE:
Left Knee Exam: Mild effusion. Posterior sag sign positive (posterior tibial subluxation at 90° flexion). Posterior drawer test demonstrates 7mm posterior translation with endpoint (Grade II PCL injury). Quadriceps active test positive. ACL (Lachman) and collaterals stable.
MRI Left Knee: Mid-substance partial tear of the posterior cruciate ligament (PCL) of the left knee.

ASSESSMENT:
Acute traumatic sprain of posterior cruciate ligament of left knee, initial encounter.

PLAN:
PCL dynamic posterior-support knee brace, crutches, non-operative quadriceps strengthening rehabilitation.`,
    question: 'Which ICD-10-CM code reports an acute traumatic sprain of the posterior cruciate ligament of the left knee on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S83.522A — Sprain of posterior cruciate ligament of left knee, initial encounter', codeSnippet: 'S83.522A' },
      { id: 'opt_b', label: 'B', text: 'S83.521A — Sprain of posterior cruciate ligament of right knee, initial encounter', codeSnippet: 'S83.521A' },
      { id: 'opt_c', label: 'C', text: 'S83.512A — Sprain of anterior cruciate ligament of left knee, initial encounter', codeSnippet: 'S83.512A' },
      { id: 'opt_d', label: 'D', text: 'S83.522D — Sprain of posterior cruciate ligament of left knee, subsequent encounter', codeSnippet: 'S83.522D' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S83.522A',
    icd10cm_code: 'S83.522A',
    code_description: 'Sprain of posterior cruciate ligament of left knee, initial encounter',
    explanation: 'Subcategory S83.52 specifically classifies sprain of the posterior cruciate ligament (PCL). The 6th character 2 designates the left knee, and 7th character A represents the active initial encounter: S83.522A.',
    documentation_evidence: 'Assessment: Acute traumatic sprain of posterior cruciate ligament of left knee, initial encounter.',
    coding_concept: 'PCL Knee Sprain Specificity and Encounter Phase',
    common_mistake: 'Confusing ACL (S83.51) with PCL (S83.52) or right (1) with left (2).',
    common_trap: 'Mismatched ligament character (ACL vs PCL).',
    learning_objective: 'Distinguish between ACL (S83.51-) and PCL (S83.52-) traumatic injury codes.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 19 Category S83.52',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'pcl', 'sprain', 'injury', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-049',
    case_number: 49,
    title: 'Olecranon Fracture: Subsequent Healing Follow-up',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 53-year-old male
Setting: Orthopedic Clinic Follow-Up

SUBJECTIVE:
Patient returns for routine 8-week follow-up following open reduction and internal fixation (tension band wiring) for a displaced closed fracture of the right olecranon process. Reports minimal pain.

OBJECTIVE:
Right Elbow Exam: Surgical scar well-healed without erythema. Range of motion: 15° extension to 125° flexion. Hardware stable without skin tenting.
Radiographs (Right Elbow): Tension band construct intact. Olecranon fracture line completely bridged with mature callus formation; anatomically consolidated.

ASSESSMENT:
Closed fracture of right olecranon, routine healing, subsequent encounter.

PLAN:
Advance to active strengthening, resume normal daily activities, return as needed.`,
    question: 'Which 7th character extension designates subsequent encounter for fracture with routine healing?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S52.021A — Fracture of olecranon process with or without displacement of right ulna, initial encounter', codeSnippet: 'S52.021A' },
      { id: 'opt_b', label: 'B', text: 'S52.021D — Fracture of olecranon process of right ulna, subsequent encounter for closed fracture with routine healing', codeSnippet: 'S52.021D' },
      { id: 'opt_c', label: 'C', text: 'S52.021K — Fracture of olecranon process of right ulna, subsequent encounter for closed fracture with nonunion', codeSnippet: 'S52.021K' },
      { id: 'opt_d', label: 'D', text: 'Z47.2 — Encounter for other orthopedic aftercare', codeSnippet: 'Z47.2' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'S52.021D',
    icd10cm_code: 'S52.021D',
    code_description: 'Fracture of olecranon process of right ulna, subsequent encounter for closed fracture with routine healing',
    explanation: 'For traumatic fractures receiving routine recovery care during the healing phase, 7th character "D" is assigned (subsequent encounter for closed fracture with routine healing). 7th character K is for nonunion, and Z codes are not assigned for traumatic fractures with 7th character extensions.',
    documentation_evidence: 'Assessment: Closed fracture of right olecranon, routine healing, subsequent encounter.',
    coding_concept: '7th Character Subsequent Encounter (D) vs Nonunion (K) vs Initial (A)',
    common_mistake: 'Using initial encounter "A" on a healing follow-up visit or using nonunion "K" when the x-ray shows mature callus.',
    common_trap: 'Mismatched healing status character (D vs K).',
    learning_objective: 'Assign 7th character D for routine consolidation follow-up visits of traumatic fractures.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Guideline Section I.C.19.c & Category S52.02',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'fracture', '7th-character', 'subsequent-encounter'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-050',
    case_number: 50,
    title: 'Cervical Radiculopathy: Nerve Root Compression',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 48-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Presents with burning right neck pain radiating down the lateral arm and forearm into the thumb and index finger for 4 weeks. Reports numbness in the thumb.

OBJECTIVE:
Cervical Exam: Positive right Spurling test reproducing sharp shooting pain into the right thumb (C6 distribution). Decreased sensation in the right C6 dermatome. Right biceps reflex diminished (1+ vs 2+ on left). Right wrist extensor strength 4/5.
MRI Cervical Spine: Right paracentral disc herniation and uncinate spurring causing severe right C5-C6 neural foraminal stenosis compressing the exiting right C6 nerve root.

ASSESSMENT:
Cervical disc disorder with radiculopathy, mid-cervical region.

PLAN:
Right C6 transforaminal epidural steroid injection under fluoroscopy. Physical therapy for cervical traction and nerve glides.`,
    question: 'Which ICD-10-CM code reports cervical disc disorder with radiculopathy in the mid-cervical region?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M50.122 — Cervical disc disorder with radiculopathy, mid-cervical region', codeSnippet: 'M50.122' },
      { id: 'opt_b', label: 'B', text: 'M54.2 — Cervicalgia', codeSnippet: 'M54.2' },
      { id: 'opt_c', label: 'C', text: 'M50.121 — Cervical disc disorder with radiculopathy, high cervical region', codeSnippet: 'M50.121' },
      { id: 'opt_d', label: 'D', text: 'G56.01 — Carpal tunnel syndrome, right upper limb', codeSnippet: 'G56.01' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M50.122',
    icd10cm_code: 'M50.122',
    code_description: 'Cervical disc disorder with radiculopathy, mid-cervical region',
    explanation: 'Category M50.1 classifies cervical disc disorders with radiculopathy. Subcategory M50.122 designates the mid-cervical region (C4-C5, C5-C6, C6-C7). Axial neck pain (M54.2) is inherent and not separately reported.',
    documentation_evidence: 'Assessment: Cervical disc disorder with radiculopathy, mid-cervical region (C5-C6).',
    coding_concept: 'Cervical Disc Disorder with Radiculopathy Region Specificity',
    common_mistake: 'Coding high cervical (M50.121) instead of mid-cervical (M50.122) for a C5-C6 pathology.',
    common_trap: 'Mismatched cervical vertebral level sub-character.',
    learning_objective: 'Select appropriate cervical disc disorder codes (M50.122) based on anatomical spine level.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M50.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'cervical', 'disc-herniation', 'radiculopathy'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-051',
    case_number: 51,
    title: 'Femoroacetabular Impingement (FAI): Cam & Pincer Morphology',
    specialty: 'Orthopedics',
    body_region: 'Hip',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 23-year-old male
Setting: Outpatient Hip Preservation

SUBJECTIVE:
College hockey player complains of bilateral anterior groin pain when squatting and skating for 6 months. Symptoms worse on the right side.

OBJECTIVE:
Right Hip Exam: Internal rotation in 90° flexion limited to 10° with sharp groin pinch (positive FADIR test). Normal neurological exam.
Radiographs & 3D CT: Bilateral femoral head-neck asphericity (alpha angle 68°, Cam morphology) and acetabular overcoverage (Pincer morphology).

ASSESSMENT:
Femoroacetabular impingement (FAI), mixed Cam and Pincer type, right hip.

PLAN:
Physical therapy for core stability, avoidance of extreme hip flexion, scheduled right hip arthroscopic femoroplasty and acetabuloplasty.`,
    question: 'Which ICD-10-CM code reports femoroacetabular impingement (FAI) of the right hip?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M25.851 — Other specified joint disorders, right hip', codeSnippet: 'M25.851' },
      { id: 'opt_b', label: 'B', text: 'M25.852 — Other specified joint disorders, left hip', codeSnippet: 'M25.852' },
      { id: 'opt_c', label: 'C', text: 'M16.11 — Unilateral primary osteoarthritis, right hip', codeSnippet: 'M16.11' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M25.851',
    icd10cm_code: 'M25.851',
    code_description: 'Other specified joint disorders, right hip',
    explanation: 'Femoroacetabular impingement (FAI) is indexed in ICD-10-CM under "Impingement, femoroacetabular (FAI)" directing to category M25.85- (Other specified joint disorders, hip). The 6th character 1 designates the right hip: M25.851.',
    documentation_evidence: 'Assessment: Femoroacetabular impingement, right hip.',
    coding_concept: 'Index Direction for Femoroacetabular Impingement (FAI)',
    common_mistake: 'Assigning osteoarthritis (M16) or general hip pain (M25.551).',
    common_trap: 'Failing to follow index for FAI.',
    learning_objective: 'Map femoroacetabular impingement (FAI) to category M25.85- with correct laterality.',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Alphabetic Index & Category M25.85',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['hip', 'fai', 'impingement', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-052',
    case_number: 52,
    title: 'Patellofemoral Pain Syndrome: Anterior Knee Pain',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 28-year-old female
Setting: Sports Medicine Clinic

SUBJECTIVE:
Recreational runner presents with bilateral anterior peripatellar aching for 2 months, exacerbated when descending stairs and after prolonged sitting with knees flexed ("movie theater sign"). Symptoms more pronounced in the right knee.

OBJECTIVE:
Right Knee Exam: Retropatellar crepitation on active knee extension. Positive Clark sign (patellar grind test reproduces pain). J-sign on tracking. Quadriceps angle (Q-angle) increased at 18°. Ligaments stable. X-rays show mild lateral patellar tilt without osteoarthritis or chondromalacia defect.

ASSESSMENT:
Patellofemoral pain syndrome, right knee.

PLAN:
Vastus medialis oblique (VMO) and hip abductor physical therapy, patellar McConnell taping, activity modification.`,
    question: 'Which ICD-10-CM code reports patellofemoral disorders of the right knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M22.2X1 — Patellofemoral disorders, right knee', codeSnippet: 'M22.2X1' },
      { id: 'opt_b', label: 'B', text: 'M22.2X2 — Patellofemoral disorders, left knee', codeSnippet: 'M22.2X2' },
      { id: 'opt_c', label: 'C', text: 'M22.41 — Chondromalacia patellae, right knee', codeSnippet: 'M22.41' },
      { id: 'opt_d', label: 'D', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M22.2X1',
    icd10cm_code: 'M22.2X1',
    code_description: 'Patellofemoral disorders, right knee',
    explanation: 'Patellofemoral disorders / pain syndrome are classified to category M22.2. A placeholder "X" is utilized for the 5th character, followed by the 6th character laterality digit: 1 for right knee (M22.2X1). Chondromalacia patellae (M22.41) requires documented cartilage softening/fibrillation.',
    documentation_evidence: 'Assessment: Patellofemoral pain syndrome, right knee.',
    coding_concept: 'Placeholder Character "X" and Patellofemoral Tracking Coding',
    common_mistake: 'Assuming chondromalacia patellae (M22.4-) or omitting the required "X" placeholder.',
    common_trap: 'Omitting placeholder character "X" before laterality digit.',
    learning_objective: 'Apply the placeholder character "X" correctly in category M22.2X- for patellofemoral tracking disorders.',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Category M22.2 & Placeholder Guideline I.B.10',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'patellofemoral', 'placeholder-x', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-053',
    case_number: 53,
    title: 'Trimalleolar Ankle Fracture: Subsequent Encounter',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 57-year-old female
Setting: Orthopedic Fracture Clinic Follow-Up

SUBJECTIVE:
Patient returns for 10-week follow-up after open reduction and internal fixation (ORIF) of a closed displaced trimalleolar fracture of the right ankle. Currently transitioning out of a CAM boot.

OBJECTIVE:
Right Ankle: Surgical incisions healed. Stable mortise on manual stress. Ankle dorsiflexion 10°, plantarflexion 30°.
Radiographs (3 views right ankle): Medial, lateral, and posterior malleoli hardware constructs anatomically intact. Bridging bone consolidation across all three fracture sites with routine healing.

ASSESSMENT:
Closed trimalleolar fracture of right lower leg, routine healing, subsequent encounter.

PLAN:
Begin active physical therapy for ankle proprioception and strengthening, weight-bearing as tolerated in supportive shoe.`,
    question: 'Which ICD-10-CM code reports a closed trimalleolar fracture of the right lower leg during a subsequent encounter with routine healing?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S82.851D — Displaced trimalleolar fracture of right lower leg, subsequent encounter for closed fracture with routine healing', codeSnippet: 'S82.851D' },
      { id: 'opt_b', label: 'B', text: 'S82.851A — Displaced trimalleolar fracture of right lower leg, initial encounter', codeSnippet: 'S82.851A' },
      { id: 'opt_c', label: 'C', text: 'S82.852D — Displaced trimalleolar fracture of left lower leg, subsequent encounter', codeSnippet: 'S82.852D' },
      { id: 'opt_d', label: 'D', text: 'Z47.1 — Aftercare following joint replacement surgery', codeSnippet: 'Z47.1' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S82.851D',
    icd10cm_code: 'S82.851D',
    code_description: 'Displaced trimalleolar fracture of right lower leg, subsequent encounter for closed fracture with routine healing',
    explanation: 'Category S82.85 classifies trimalleolar fractures. The 6th character 1 specifies right lower leg, and the 7th character D designates a subsequent encounter for closed fracture with routine healing: S82.851D.',
    documentation_evidence: 'Assessment: Closed trimalleolar fracture of right lower leg, routine healing, subsequent encounter.',
    coding_concept: 'Trimalleolar Fracture Specificity and 7th Character Extension',
    common_mistake: 'Using unimalleolar/bimalleolar code or selecting initial encounter extension A.',
    common_trap: 'Selecting initial encounter character for routine follow-up consolidation.',
    learning_objective: 'Report complex ankle fractures (trimalleolar S82.85-) with proper laterality and healing phase extensions.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category S82.85',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'fracture', '7th-character', 'subsequent-encounter'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-054',
    case_number: 54,
    title: 'Adhesive Capsulitis of Left Shoulder',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 52-year-old male
Setting: Physical Medicine & Rehabilitation

SUBJECTIVE:
Presents with 5 months of worsening left shoulder stiffness and pain. Difficulty reaching for his wallet or reaching overhead. Right shoulder normal.

OBJECTIVE:
Left Shoulder Exam: Active and passive ROM severely restricted: abduction 75°, forward flexion 90°, external rotation 10°. End-range pain in all directions. No rotator cuff weakness on manual testing.

ASSESSMENT:
Adhesive capsulitis of left shoulder (Frozen shoulder).

PLAN:
Left glenohumeral joint corticosteroid injection and physical therapy for passive range of motion.`,
    question: 'Which ICD-10-CM code reports adhesive capsulitis of the left shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.02 — Adhesive capsulitis of left shoulder', codeSnippet: 'M75.02' },
      { id: 'opt_b', label: 'B', text: 'M75.01 — Adhesive capsulitis of right shoulder', codeSnippet: 'M75.01' },
      { id: 'opt_c', label: 'C', text: 'M25.612 — Stiffness of left shoulder, not elsewhere classified', codeSnippet: 'M25.612' },
      { id: 'opt_d', label: 'D', text: 'M25.512 — Pain in left shoulder', codeSnippet: 'M25.512' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.02',
    icd10cm_code: 'M75.02',
    code_description: 'Adhesive capsulitis of left shoulder',
    explanation: 'Category M75.0 represents adhesive capsulitis of shoulder: M75.02 indicates the left shoulder.',
    documentation_evidence: 'Assessment: Adhesive capsulitis of left shoulder.',
    coding_concept: 'Frozen Shoulder Laterality Character Assignment',
    common_mistake: 'Confusing right (1) with left (2) or selecting general stiffness code.',
    common_trap: 'Mismatched laterality digit.',
    learning_objective: 'Report adhesive capsulitis with correct laterality (M75.02 for left shoulder).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'adhesive-capsulitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-055',
    case_number: 55,
    title: 'Piriformis Syndrome: Deep Gluteal Sciatic Compression',
    specialty: 'Orthopedics',
    body_region: 'Hip',
    difficulty: 'Intermediate',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 37-year-old female
Setting: Physical Medicine & Rehabilitation

SUBJECTIVE:
Presents with deep right buttock pain aching down the posterior thigh for 3 months, aggravated by sitting on hard chairs and driving. Lumbar spine MRI performed last week was completely normal with no disc herniation or spinal stenosis.

OBJECTIVE:
Exam: Exquisite tenderness to deep palpation over the right piriformis muscle belly / sciatic notch. Positive FAIR test (Flexion, Adduction, Internal Rotation reproduces buttock pain and posterior thigh paresthesias). Lumbar spine active range of motion pain-free. Negative straight leg raise for lumbar root tension.

ASSESSMENT:
Piriformis syndrome, right side.

PLAN:
Ultrasound-guided right piriformis muscle trigger point / corticosteroid injection. Physical therapy for piriformis stretching and neural mobilization.`,
    question: 'Which ICD-10-CM code reports piriformis syndrome / sciatic nerve lesion in the right lower limb?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G57.01 — Lesion of sciatic nerve, right lower limb', codeSnippet: 'G57.01' },
      { id: 'opt_b', label: 'B', text: 'M54.31 — Sciatica, right side', codeSnippet: 'M54.31' },
      { id: 'opt_c', label: 'C', text: 'M51.16 — Lumbar disc disorder with radiculopathy', codeSnippet: 'M51.16' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G57.01',
    icd10cm_code: 'G57.01',
    code_description: 'Lesion of sciatic nerve, right lower limb',
    explanation: 'In the ICD-10-CM Alphabetic Index, "Syndrome, piriformis" directs to "Lesion, sciatic nerve" (category G57.0-). The 5th character 1 specifies the right lower limb: G57.01.',
    documentation_evidence: 'Assessment: Piriformis syndrome, right side.',
    coding_concept: 'Index Mapping of Piriformis Syndrome to Peripheral Nerve Mononeuropathy',
    common_mistake: 'Using spinal sciatica code (M54.31) when documentation specifies peripheral piriformis nerve entrapment.',
    common_trap: 'Coding lumbar sciatica instead of peripheral nerve entrapment G57.0.',
    learning_objective: 'Index piriformis syndrome correctly to G57.0- (sciatic nerve lesion) with appropriate limb laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Alphabetic Index & Category G57.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['hip', 'piriformis', 'neurology', 'mononeuropathy', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-056',
    case_number: 56,
    title: 'Bunionette (Tailor Bunion): 5th Metatarsal Head Deformity',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 39-year-old female
Setting: Foot & Ankle Clinic

SUBJECTIVE:
Presents with painful lateral prominence on the outside of her right foot at the base of the little toe for 6 months. Painful with shoe pressure.

OBJECTIVE:
Right Foot Exam: Prominent, tender lateral eminence over the right 5th metatarsal head (bunionette) with localized bursal thickening. 1st MTP joint normal.
Radiographs (Right Foot): Lateral bowing of the 5th metatarsal shaft with increased 4-5 intermetatarsal angle (14°).

ASSESSMENT:
Bunionette (Tailor bunion), right foot.

PLAN:
Wide-toe box shoes, silicone 5th metatarsal pad, consideration of 5th metatarsal osteotomy if symptoms persist.`,
    question: 'Which ICD-10-CM code reports a bunionette (Tailor bunion) of the right foot?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M21.611 — Bunionette of right foot', codeSnippet: 'M21.611' },
      { id: 'opt_b', label: 'B', text: 'M21.612 — Bunionette of left foot', codeSnippet: 'M21.612' },
      { id: 'opt_c', label: 'C', text: 'M20.11 — Hallux valgus (acquired), right foot', codeSnippet: 'M20.11' },
      { id: 'opt_d', label: 'D', text: 'M79.671 — Pain in right foot', codeSnippet: 'M79.671' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M21.611',
    icd10cm_code: 'M21.611',
    code_description: 'Bunionette of right foot',
    explanation: 'A bunionette (Tailor bunion, deformity of the 5th metatarsal head) is coded to subcategory M21.61. The 6th character 1 denotes the right foot: M21.611. Hallux valgus (M20.1-) is a deformity of the 1st MTP joint (great toe).',
    documentation_evidence: 'Assessment: Bunionette (Tailor bunion), right foot.',
    coding_concept: 'Bunionette (5th Metatarsal, M21.61) vs Hallux Valgus (1st MTP, M20.1)',
    common_mistake: 'Confusing bunionette (5th digit, M21.61) with hallux valgus (1st digit bunion, M20.1).',
    common_trap: 'Selecting hallux valgus code for a 5th metatarsal bunionette.',
    learning_objective: 'Distinguish between hallux valgus (1st metatarsal, M20.1-) and bunionette (5th metatarsal, M21.61-).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M21.61',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['foot-ankle', 'bunionette', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-057',
    case_number: 57,
    title: 'Clavicle Fracture Follow-up: Phase of Care',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 21-year-old male
Setting: Orthopedic Trauma Follow-up Clinic

SUBJECTIVE:
Returns for 6-week follow-up after non-operative sling management for a closed, minimally displaced fracture of the shaft of the left clavicle sustained in a bicycling accident.

OBJECTIVE:
Left Shoulder Exam: Palpable non-tender healing bony callus over mid-shaft left clavicle. Active shoulder elevation 140° with minimal discomfort. Neurovascular exam intact.
X-Rays (Left Clavicle): Robust bridging callus across fracture line, maintained alignment, routine healing.

ASSESSMENT:
Closed fracture of shaft of left clavicle, routine healing, subsequent encounter.

PLAN:
Wean out of sling, begin progressive active-assisted shoulder stretching and light strengthening, follow up in 6 weeks.`,
    question: 'Which ICD-10-CM code reports a closed fracture of the shaft of the left clavicle during a subsequent encounter for routine healing?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S42.022D — Fracture of shaft of left clavicle, subsequent encounter for closed fracture with routine healing', codeSnippet: 'S42.022D' },
      { id: 'opt_b', label: 'B', text: 'S42.022A — Fracture of shaft of left clavicle, initial encounter', codeSnippet: 'S42.022A' },
      { id: 'opt_c', label: 'C', text: 'S42.021D — Fracture of shaft of right clavicle, subsequent encounter', codeSnippet: 'S42.021D' },
      { id: 'opt_d', label: 'D', text: 'Z47.89 — Encounter for other orthopedic aftercare', codeSnippet: 'Z47.89' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S42.022D',
    icd10cm_code: 'S42.022D',
    code_description: 'Fracture of shaft of left clavicle, subsequent encounter for closed fracture with routine healing',
    explanation: 'Subcategory S42.02 classifies fractures of the shaft of the clavicle. The 6th character 2 indicates the left clavicle, and the 7th character D represents subsequent encounter for routine fracture healing: S42.022D.',
    documentation_evidence: 'Assessment: Closed fracture of shaft of left clavicle, routine healing, subsequent encounter.',
    coding_concept: 'Clavicle Fracture Anatomical Subsite & 7th Character Extension',
    common_mistake: 'Using initial encounter A on a 6-week healing follow-up visit.',
    common_trap: 'Mismatched encounter character.',
    learning_objective: 'Apply the 7th character extension D for routine healing follow-up visits of clavicle fractures.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category S42.02',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'fracture', '7th-character', 'subsequent-encounter'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-058',
    case_number: 58,
    title: 'Chronic Lateral Ankle Instability',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 25-year-old male
Setting: Outpatient Foot & Ankle Surgery

SUBJECTIVE:
Patient complains of recurrent "giving way" and chronic rolling of his right ankle during cutting sports over the past 2 years following multiple prior ankle sprains. Denies acute sprain in the past 3 months.

OBJECTIVE:
Right Ankle Exam: Marked anterior drawer laxity (10mm translation without firm endpoint) and positive talar tilt test on inversion stress. Peroneal tendon strength 5/5.
Stress Radiographs / MRI: Attenuation and chronic insufficiency of the right anterior talofibular and calcaneofibular ligaments with mechanical joint instability. No acute fracture.

ASSESSMENT:
Chronic lateral ankle instability, right ankle.

PLAN:
Scheduled for modified Broström-Gould anatomic lateral ankle ligament reconstruction.`,
    question: 'Which ICD-10-CM code reports chronic ligamentous instability / laxity of the right ankle?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M24.271 — Disorder of ligament, right ankle', codeSnippet: 'M24.271' },
      { id: 'opt_b', label: 'B', text: 'S93.401A — Sprain of unspecified ligament of right ankle, initial encounter', codeSnippet: 'S93.401A' },
      { id: 'opt_c', label: 'C', text: 'M24.272 — Disorder of ligament, left ankle', codeSnippet: 'M24.272' },
      { id: 'opt_d', label: 'D', text: 'M25.571 — Pain in right ankle and joints of right foot', codeSnippet: 'M25.571' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M24.271',
    icd10cm_code: 'M24.271',
    code_description: 'Disorder of ligament, right ankle',
    explanation: 'Chronic ligamentous laxity/instability is coded to Chapter 13 category M24.2- (Disorder of ligament). The 6th character 1 designates the right ankle: M24.271. An acute trauma S-code (S93) is incorrect because there is no acute injury.',
    documentation_evidence: 'Assessment: Chronic lateral ankle instability, right ankle.',
    coding_concept: 'Chronic Ligament Instability (M24.2) vs Acute Traumatic Sprain (S93)',
    common_mistake: 'Using an acute sprain code (S93) for chronic 2-year mechanical ligament laxity.',
    common_trap: 'Selecting acute trauma code for chronic ligamentous laxity.',
    learning_objective: 'Distinguish chronic non-traumatic ligament laxity/instability in Chapter 13 (M24.2-) from acute traumatic sprains in Chapter 19.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Chapter 13 Category M24.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'chronic-instability', 'acute-vs-chronic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-059',
    case_number: 59,
    title: 'Acute Wrist Sprain: Documentation of Ruled Out Fracture',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 34-year-old female
Setting: Urgent Care

SUBJECTIVE:
Fell onto outstretched left hand (FOOSH) on ice 3 hours ago. Complains of dorsal wrist pain and mild swelling.

OBJECTIVE:
Left Wrist Exam: Diffuse dorsal tenderness. Anatomical snuffbox non-tender. Distal radius and ulnar styloid non-tender. Active wrist flexion and extension limited by pain.
Radiographs (3 views left wrist): Negative for scaphoid fracture, distal radius fracture, or carpal malalignment.

ASSESSMENT:
Acute wrist sprain, left wrist, initial encounter.

PLAN:
Wrist cock-up splint, ice, follow up in 1 week.`,
    question: 'Which ICD-10-CM code reports an acute sprain of the left wrist on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S63.502A — Sprain of unspecified ligament of left wrist, initial encounter', codeSnippet: 'S63.502A' },
      { id: 'opt_b', label: 'B', text: 'S63.501A — Sprain of unspecified ligament of right wrist, initial encounter', codeSnippet: 'S63.501A' },
      { id: 'opt_c', label: 'C', text: 'S62.002A — Fracture of navicular [scaphoid] bone of left wrist, initial encounter', codeSnippet: 'S62.002A' },
      { id: 'opt_d', label: 'D', text: 'M25.532 — Pain in left wrist', codeSnippet: 'M25.532' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S63.502A',
    icd10cm_code: 'S63.502A',
    code_description: 'Sprain of unspecified ligament of left wrist, initial encounter',
    explanation: 'Subcategory S63.50 classifies wrist sprains. The 6th character 2 specifies left wrist, and 7th character A represents the initial encounter: S63.502A. Scaphoid fracture (S62.0) was ruled out by x-ray and non-tender snuffbox.',
    documentation_evidence: 'Assessment: Acute wrist sprain, left wrist, initial encounter.',
    coding_concept: 'Acute Traumatic Wrist Sprain Coding & Laterality',
    common_mistake: 'Coding suspected scaphoid fracture or right wrist digit.',
    common_trap: 'Mismatched laterality character.',
    learning_objective: 'Report acute wrist sprains (S63.50-) with left laterality and initial encounter extension.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category S63.50',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['upper-extremity', 'wrist', 'sprain', '7th-character'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-060',
    case_number: 60,
    title: 'Chondromalacia Patellae: Cartilage Degeneration Specificity',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 32-year-old female
Setting: Orthopedic Clinic

SUBJECTIVE:
Presents with anterior right knee grating sensation and aching behind the kneecap when descending stairs and kneeling for 4 months.

OBJECTIVE:
Right Knee Exam: Coarse crepitus during active knee extension. Pain on compression of patella into trochlear groove. Clark test positive.
MRI Right Knee: Grade 2 chondromalacia with softening and superficial fissuring of the articular cartilage of the posterior right patella. Menisci and cruciates intact.

ASSESSMENT:
Chondromalacia patellae, right knee.

PLAN:
Closed-chain quadriceps strengthening, physical therapy for patellar alignment, oral glucosamine.`,
    question: 'Which ICD-10-CM code reports chondromalacia patellae of the right knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M22.41 — Chondromalacia patellae, right knee', codeSnippet: 'M22.41' },
      { id: 'opt_b', label: 'B', text: 'M22.42 — Chondromalacia patellae, left knee', codeSnippet: 'M22.42' },
      { id: 'opt_c', label: 'C', text: 'M22.2X1 — Patellofemoral disorders, right knee', codeSnippet: 'M22.2X1' },
      { id: 'opt_d', label: 'D', text: 'M17.11 — Primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M22.41',
    icd10cm_code: 'M22.41',
    code_description: 'Chondromalacia patellae, right knee',
    explanation: 'Category M22.4 specifically classifies chondromalacia patellae. Sub-digit 1 specifies the right knee: M22.41.',
    documentation_evidence: 'Assessment: Chondromalacia patellae, right knee.',
    coding_concept: 'Chondromalacia Patellae (M22.4) vs General Patellofemoral Disorder (M22.2)',
    common_mistake: 'Using generic patellofemoral disorder code (M22.2X1) when specific chondromalacia is confirmed on MRI.',
    common_trap: 'Failing to assign the specific chondromalacia code when cartilage softening is documented.',
    learning_objective: 'Report chondromalacia patellae with anatomical laterality using category M22.4-.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M22.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'chondromalacia', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
];
