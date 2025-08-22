import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Clock, User, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MedOChatProps {
  onBack: () => void;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  isOnline: boolean;
  nextAvailable: string;
  image: string;
  consultationFee: number;
}

interface VideoCallState {
  isActive: boolean;
  isVideoOn: boolean;
  isAudioOn: boolean;
  duration: number;
  doctorId?: string;
}

const MedOChat = ({ onBack }: MedOChatProps) => {
  const [videoCall, setVideoCall] = useState<VideoCallState>({
    isActive: false,
    isVideoOn: true,
    isAudioOn: true,
    duration: 0
  });
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [callStartTime, setCallStartTime] = useState<Date | null>(null);

  const availableDoctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialty: 'General Medicine',
      rating: 4.8,
      experience: '12 years',
      isOnline: true,
      nextAvailable: 'Available now',
      image: '/placeholder.svg',
      consultationFee: 500
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      rating: 4.9,
      experience: '15 years',
      isOnline: true,
      nextAvailable: 'Available now',
      image: '/placeholder.svg',
      consultationFee: 800
    },
    {
      id: '3',
      name: 'Dr. Anita Patel',
      specialty: 'Pediatrics',
      rating: 4.7,
      experience: '10 years',
      isOnline: false,
      nextAvailable: 'Available in 30 min',
      image: '/placeholder.svg',
      consultationFee: 600
    },
    {
      id: '4',
      name: 'Dr. Vikram Singh',
      specialty: 'Dermatology',
      rating: 4.6,
      experience: '8 years',
      isOnline: true,
      nextAvailable: 'Available now',
      image: '/placeholder.svg',
      consultationFee: 700
    }
  ];

  // Call duration timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (videoCall.isActive && callStartTime) {
      interval = setInterval(() => {
        const now = new Date();
        const duration = Math.floor((now.getTime() - callStartTime.getTime()) / 1000);
        setVideoCall(prev => ({ ...prev, duration }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [videoCall.isActive, callStartTime]);

  const startCall = async (doctor: Doctor) => {
    try {
      // Request camera and microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setSelectedDoctor(doctor);
      setVideoCall(prev => ({ ...prev, isActive: true, doctorId: doctor.id }));
      setCallStartTime(new Date());
    } catch (error) {
      console.error('Failed to access camera/microphone:', error);
      alert('Please allow camera and microphone access to start video call');
    }
  };

  const endCall = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setVideoCall({ isActive: false, isVideoOn: true, isAudioOn: true, duration: 0 });
    setSelectedDoctor(null);
    setCallStartTime(null);
  };

  const toggleVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoCall.isVideoOn;
        setVideoCall(prev => ({ ...prev, isVideoOn: !prev.isVideoOn }));
      }
    }
  };

  const toggleAudio = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !videoCall.isAudioOn;
        setVideoCall(prev => ({ ...prev, isAudioOn: !prev.isAudioOn }));
      }
    }
  };

  const formatCallDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scheduleAppointment = (doctor: Doctor) => {
    alert(`Scheduling appointment with ${doctor.name}. This feature will be implemented soon.`);
  };

  if (videoCall.isActive && selectedDoctor) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Video className="h-6 w-6 text-primary" />
              Video Consultation with {selectedDoctor.name}
            </h1>
            <Badge variant="secondary" className="ml-auto">
              {formatCallDuration(videoCall.duration)}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[75vh]">
            {/* Main Video Area */}
            <div className="lg:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Dr. {selectedDoctor.name}</CardTitle>
                    <Badge variant="outline">{selectedDoctor.specialty}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="relative flex-1 bg-muted rounded-lg overflow-hidden">
                    {/* Doctor's video placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={selectedDoctor.image} />
                        <AvatarFallback className="text-4xl">
                          {selectedDoctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    {/* Patient's video (small overlay) */}
                    <div className="absolute bottom-4 right-4 w-48 h-36 bg-black rounded-lg overflow-hidden border-2 border-white shadow-lg">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ display: videoCall.isVideoOn ? 'block' : 'none' }}
                      />
                      {!videoCall.isVideoOn && (
                        <div className="flex items-center justify-center h-full bg-gray-800">
                          <VideoOff className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Call Controls */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <Button
                      variant={videoCall.isVideoOn ? "default" : "secondary"}
                      size="lg"
                      onClick={toggleVideo}
                      className="rounded-full"
                    >
                      {videoCall.isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                    </Button>
                    
                    <Button
                      variant={videoCall.isAudioOn ? "default" : "secondary"}
                      size="lg"
                      onClick={toggleAudio}
                      className="rounded-full"
                    >
                      {videoCall.isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                    </Button>
                    
                    <Button
                      variant="destructive"
                      size="lg"
                      onClick={endCall}
                      className="rounded-full"
                    >
                      <PhoneOff className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Sidebar */}
            <div className="lg:col-span-1">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Chat with Doctor</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 bg-muted/50 rounded-lg p-4 mb-4 overflow-y-auto">
                    <p className="text-sm text-muted-foreground text-center">
                      Chat functionality will be available during the call
                    </p>
                  </div>
                  <div className="space-y-2">
                    <textarea
                      placeholder="Type a message to the doctor..."
                      className="w-full p-3 rounded-lg border resize-none"
                      rows={3}
                    />
                    <Button className="w-full">Send Message</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            Med-o-Chat
          </h1>
          <Badge variant="secondary" className="ml-auto">Video Consultations</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={doctor.image} />
                    <AvatarFallback>
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.experience})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${doctor.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                    <span className="text-sm font-medium">
                      {doctor.isOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                  <Badge variant="outline">₹{doctor.consultationFee}</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {doctor.nextAvailable}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => startCall(doctor)}
                    disabled={!doctor.isOnline}
                    className="flex items-center gap-2"
                  >
                    <Video className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => scheduleAppointment(doctor)}
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Emergency Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm text-destructive font-medium mb-2">
                🚨 For medical emergencies, please call immediately:
              </p>
              <div className="flex gap-4 text-sm">
                <span className="font-semibold">Emergency: 112</span>
                <span className="font-semibold">Ambulance: 108</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Video consultations are for non-emergency medical guidance only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedOChat;