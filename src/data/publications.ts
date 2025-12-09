export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  color: string;
  abstract?: string;
  doi?: string;
  type: 'conference' | 'journal' | 'workshop';
  rank?: string;
  awards?: string[];
}

export const publications: Publication[] = [
  {
    id: 'psivt-2024',
    title: 'Efficient 3D Brain Tumor Segmentation with Axial-Coronal-Sagittal Embedding',
    authors: 'Tuan-Luc Huynh, Thanh-Danh Le, Tam V. Nguyen, Trung-Nghia Le & Minh-Triet Tran',
    venue: 'Pacific-Rim Symposium on Image and Video Technology (PSIVT)',
    year: '2024',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-0376-0_11',
    color: '#B4975A',
    type: 'conference',
    rank: 'B',
    awards: ['Best Paper Award'],
    abstract: 'We propose an efficient 3D brain tumor segmentation method using axial-coronal-sagittal embedding techniques for accurate detection and delineation of brain tumors in medical images.'
  },
  {
    id: 'iccv-2023',
    title: 'Advanced augmentation and ensemble approaches for classifying long-tailed multi-label chest x-rays',
    authors: 'Trong-Hieu Nguyen-Mau, Tuan-Luc Huynh, Thanh-Danh Le, Hai-Dang Nguyen, Minh-Triet Tran',
    venue: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    year: '2023',
    link: 'https://openaccess.thecvf.com/content/ICCV2023W/CVAMD/html/Nguyen-Mau_Advanced_Augmentation_and_Ensemble_Approaches_for_Classifying_Long-Tailed_Multi-Label_Chest_ICCVW_2023_paper.html',
    color: '#800020',
    type: 'conference',
    rank: 'A',
  },
  {
    id: 'cag-2023',
    title: 'SketchANIMAR: Sketch-based 3D animal fine-grained retrieval',
    authors: 'Trung-Nghia Le et all, (including Thanh-Danh Le)',
    venue: 'Computer & Graphics',
    year: '2023',
    link: 'https://doi.org/10.1016/j.cag.2023.07.035',
    color: '#B4975A',
    type: 'journal',
    rank: 'Q2',
  },
  {
    id: 'jmgm-2022',
    title: 'Surface-based protein domains retrieval methods from SHREC2021 challenge',
    authors: 'Florent Langefield, et al. (including Danh Le)',
    venue: 'Journal of Molecular Graphics and Modelling',
    year: '2022',
    link: 'https://doi.org/10.1016/j.jmgm.2021.108103',
    doi: '10.1016/j.jmgm.2021.108103',
    color: '#800020',
    type: 'journal',
    rank: 'Q2',
    abstract: 'Analysis and comparison of various surface-based protein domain retrieval methods presented in the SHREC2021 challenge.'
  },
  {
    id: 'cag-2021',
    title: 'Retrieval and classification of protein surfaces equipped with physical and chemical properties',
    authors: 'Andrea Raffo, et al. (including Danh Le)',
    venue: 'Computer & Graphics',
    year: '2021',
    link: 'https://doi.org/10.1016/j.cag.2021.06.010',
    doi: '10.1016/j.cag.2021.06.010',
    color: '#B4975A',
    type: 'journal',
    rank: 'Q2',
    abstract: 'A novel approach for protein surface retrieval and classification using physical and chemical properties for improved molecular analysis.'
  },
  {
    id: 'shrec-2021',
    title: 'SHREC 2021: Surface-based Protein Domains Retrieval',
    authors: 'Florent Langefield, et al. (including Danh Le)',
    venue: 'The 14th 3D Object Retrieval Workshop',
    year: '2021',
    link: 'https://doi.org/10.2312/3dor.20211308',
    doi: '10.2312/3dor.20211308',
    color: '#800020',
    type: 'workshop',
    abstract: 'Description and results of the SHREC 2021 track on surface-based protein domain retrieval, including benchmark datasets and evaluation metrics.'
  },
  {
    id: 'mediaeval-2021',
    title: 'HCMUS at MediaEval 2021: Fine-tuning CLIP for Automatic News-Images Re-Matching',
    authors: 'Thien-Tri Cao et al. (including Danh Le)',
    venue: 'Multimedia Benchmark 2021',
    year: '2021',
    link: 'https://ceur-ws.org/Vol-3181/paper48.pdf',
    doi: 'n/a',
    color: '#B4975A',
    type: 'workshop',
    abstract: 'Description and results of the SHREC 2021 track on surface-based protein domain retrieval, including benchmark datasets and evaluation metrics.'
  }
];

export function getPublicationById(id: string): Publication | undefined {
  return publications.find(pub => pub.id === id);
}
