import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [

];

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

const getStatusColor = (status: string) => {
  return status === 'Completed' 
    ? 'bg-green-100 text-green-800 border-green-200'
    : 'bg-orange-100 text-orange-800 border-orange-200';
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-industrial border-b">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Project Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our successful implementations and case studies across various industries. 
              From agricultural modernization to medical facility upgrades, we deliver excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>100+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-glow rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        {projects.length === 0 ? (
          // Coming Soon Display
          <div className="flex flex-col items-center justify-center text-center py-24">
            <img
              src="/agricultural-tractor.jpg"
              alt="Coming Soon"
              className="w-full h-64 mb-6 object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2">Projects Coming Soon</h2>
            <p className="text-muted-foreground max-w-md">
              We are currently working on some exciting projects. Please check back later 
              to see our latest work!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="product-card group h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Project Info */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.teamSize}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link to={`/case-study/${project.id}`}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 hover-scale"
                        >
                          View Case Study
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let our experienced team help you 
            achieve your equipment and installation goals with professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Download Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
