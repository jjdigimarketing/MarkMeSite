/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: casestudies
 * Interface for CaseStudies
 */
export interface CaseStudies {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  industry?: string;
  /** @wixFieldType text */
  challengeGoal?: string;
  /** @wixFieldType text */
  solutionApproach?: string;
  /** @wixFieldType text */
  resultsOutcome?: string;
  /** @wixFieldType text */
  platformsUsed?: string;
  /** @wixFieldType image */
  thumbnailImage?: string;
  /** @wixFieldType image */
  mainMedia?: string;
  /** @wixFieldType multi_reference */
  marketingpackages?: MarketingPackages[];
}


/**
 * Collection ID: marketingpackages
 * Interface for MarketingPackages
 */
export interface MarketingPackages {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType multi_reference */
  relatedcasestudies?: CaseStudies[];
  /** @wixFieldType text */
  packageName?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  servicesIncluded?: string;
  /** @wixFieldType image */
  packageImage?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
}
