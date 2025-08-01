import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const caseStudies = {
  1: {
    title: "Modernization of Al-Rashid Agricultural Complex",
    description: "Complete overhaul of irrigation systems and equipment modernization for a 500-hectare agricultural facility.",
    category: "Agricultural",
    location: "Antalya, Turkey",
    date: "2024",
    duration: "8 months",
    teamSize: "12 specialists",
    budget: "$2.5M",
    client: "Al-Rashid Agricultural Holdings",
    image: "/src/assets/project-agricultural.jpg",
    challenge: "The Al-Rashid Agricultural Complex was operating with outdated equipment from the 1990s, resulting in inefficient water usage, low crop yields, and high operational costs. The client needed a complete modernization while maintaining continuous operations.",
    solution: "We implemented a phased modernization approach, introducing state-of-the-art irrigation systems, precision farming equipment, and smart monitoring technologies. Our team worked in sections to minimize operational disruption.",
    results: [
      "35% increase in crop yield",
      "25% reduction in water consumption", 
      "40% decrease in operational costs",
      "Introduction of precision farming techniques",
      "Real-time monitoring and automation"
    ],
    timeline: [
      { phase: "Planning & Assessment", duration: "2 months", status: "completed" },
      { phase: "Equipment Procurement", duration: "1 month", status: "completed" },
      { phase: "Installation Phase 1", duration: "2 months", status: "completed" },
      { phase: "Installation Phase 2", duration: "2 months", status: "completed" },
      { phase: "Testing & Training", duration: "1 month", status: "completed" }
    ],
    equipment: [
      "15x ProField Tractor 2000X",
      "Smart Irrigation System covering 500 hectares",
      "Precision Planting Equipment",
      "Automated Monitoring Sensors",
      "Weather Station Integration"
    ],
    testimonial: {
      quote: "Ottoman Enterprises transformed our entire operation. The new equipment and systems have revolutionized how we farm, making us more efficient and sustainable.",
      author: "Ahmed Al-Rashid",
      position: "Farm Director"
    }
  },
  2: {
    title: "Honey Production Facility Setup",
    description: "Establishment of a modern honey production facility with complete beekeeping equipment installation.",
    category: "Beekeeping", 
    location: "Izmir, Turkey",
    date: "2024",
    duration: "4 months",
    teamSize: "8 specialists",
    budget: "$850K",
    client: "Golden Hive Co-operative",
    image: "/src/assets/beekeeping-hive.jpg",
    challenge: "The Golden Hive Co-operative needed to establish a modern honey production facility from scratch, including hive setup, extraction equipment, and training for 25 local beekeepers with varying experience levels.",
    solution: "We designed a comprehensive beekeeping operation with modern Langstroth hive systems, professional-grade extraction equipment, and implemented a structured training program combining theoretical knowledge with hands-on experience.",
    results: [
      "40% increase in honey production",
      "25 beekeepers trained on modern techniques",
      "Established quality control processes",
      "Reduced bee mortality by 30%",
      "Created sustainable income for local community"
    ],
    timeline: [
      { phase: "Site Preparation", duration: "3 weeks", status: "completed" },
      { phase: "Hive Installation", duration: "4 weeks", status: "completed" },
      { phase: "Equipment Setup", duration: "6 weeks", status: "completed" },
      { phase: "Training Program", duration: "8 weeks", status: "completed" },
      { phase: "Production Testing", duration: "3 weeks", status: "completed" }
    ],
    equipment: [
      "200x BeeMax Langstroth Hive Systems",
      "Professional Honey Extraction Line",
      "Quality Testing Equipment",
      "Bee Health Monitoring Tools",
      "Protective Gear for Workers"
    ],
    testimonial: {
      quote: "The training and equipment provided by Ottoman Enterprises has completely transformed our honey production. We're now producing premium quality honey at scale.",
      author: "Mehmet Özkan",
      position: "Co-operative Manager"
    }
  }
};

export default function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudies[Number(id) as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Agricultural': 'bg-green-100 text-green-800 border-green-200',
      'Beekeeping': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Medical': 'bg-blue-100 text-blue-800 border-blue-200',
      'Vocational': 'bg-purple-100 text-purple-800 border-purple-200',
      'Promotional': 'bg-pink-100 text-pink-800 border-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-6 pb-8">
            <Link to="/projects" className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <Badge className={getCategoryColor(caseStudy.category) + " mb-4"}>
              {caseStudy.category}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {caseStudy.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90 text-sm animate-fade-in delay-200">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {caseStudy.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {caseStudy.date}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {caseStudy.teamSize}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="product-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">The Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Our Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Stats */}
            <div className="space-y-4">
              <Card className="product-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Client:</span>
                      <span className="font-medium">{caseStudy.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{caseStudy.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget:</span>
                      <span className="font-medium">{caseStudy.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size:</span>
                      <span className="font-medium">{caseStudy.teamSize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Key Results
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Timeline */}
          <Card className="product-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Project Timeline</h3>
              <div className="space-y-4">
                {caseStudy.timeline.map((phase, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{phase.phase}</h4>
                      <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Completed
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Equipment Used */}
          <Card className="product-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Equipment & Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="product-card bg-gradient-card">
            <CardContent className="p-8 text-center">
              <blockquote className="text-lg italic mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.client}</div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experienced team help you achieve similar results with professional excellence and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Get Free Consultation
              </Button>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}