'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Plus, Send, Users, MessageSquare, Trash2, Search, 
  TrendingUp, Clock, Globe, Sparkles, CheckCircle2, 
  AlertCircle, Loader2 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function PremiumDashboard() {
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'loading'; message: string } | null>(null);

  const lists = [
    { id: '1', name: 'Kathmandu Customers', count: 3421, location: 'Bagmati • Kathmandu' },
    { id: '2', name: 'Pokhara Business Owners', count: 892, location: 'Gandaki • Kaski' },
    { id: '3', name: 'Biratnagar Students', count: 2100, location: 'Koshi • Morang' },
    { id: '4', name: 'All Nepal Users', count: 12450, location: 'All Provinces' },
    { id: '5', name: 'Lumbini Farmers', count: 567, location: 'Lumbini • Rupandehi' },
  ];

  const campaigns = [
    { name: 'Dashain Offer 2025', sent: '2 hours ago', delivered: 98 },
    { name: 'Tihar Greetings', sent: '1 day ago', delivered: 99 },
    { name: 'Election Reminder - Kathmandu', sent: '3 days ago', delivered: 95 },
  ];

  const toggleList = (id: string) => {
    setSelectedLists(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleCreateList = () => {
    if (!newListName.trim()) {
      toast.error('Please enter a list name');
      return;
    }
    setFeedback({ type: 'loading', message: 'Creating list...' });
    setTimeout(() => {
      toast.success(`"${newListName}" created successfully!`);
      setNewListName('');
      setIsCreateOpen(false);
      setFeedback(null);
    }, 1200);
  };

  const handleSendSMS = () => {
    if (selectedLists.length === 0) {
      toast.error('Please select at least one list');
      return;
    }
    setFeedback({ type: 'loading', message: 'Sending SMS...' });
    setTimeout(() => {
      toast.success(`SMS sent to ${selectedLists.length} list(s)!`);
      setFeedback({ type: 'success', message: `Sent to ${selectedLists.length} list(s)` });
      setTimeout(() => setFeedback(null), 4000);
    }, 2000);
  };

  const filteredLists = lists.filter(list =>
    list.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    list.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">

        {/* Floating Feedback */}
        {feedback && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 100, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <Alert className={`shadow-2xl border ${
              feedback.type === 'success' ? 'border-green-500/50' :
              feedback.type === 'error' ? 'border-destructive/50' :
              'border-primary/50'
            } bg-card/95 backdrop-blur`}>
              <div className="flex items-center gap-3">
                {feedback.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {feedback.type === 'error' && <AlertCircle className="h-5 w-5 text-destructive" />}
                {feedback.type === 'loading' && <Loader2 className="h-5 w-5 animate-spin text-primary" />}
                <AlertDescription className="font-medium">{feedback.message}</AlertDescription>
              </div>
            </Alert>
          </motion.div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

          {/* Hero */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              BulkEmail
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nepal's fastest, most reliable bulk SMS platform — built for scale, trusted by thousands.
            </p>
          </motion.header>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="h-14 px-8 text-lg font-medium shadow-lg">
                  <Plus className="mr-3 h-6 w-6" />
                  Create New List
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">Create Recipient List</DialogTitle>
                </DialogHeader>
                <div className="py-6 space-y-4">
                  <Label className="text-base">List Name</Label>
                  <Input
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    placeholder="e.g. Dashain Customers 2025"
                    className="h-12 text-lg"
                  />
                </div>
                <DialogFooter>
                  <Button onClick={handleCreateList} size="lg" className="w-full sm:w-auto">
                    Create List
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-medium border-2">
              <Link href="/campaigns/new">
                <Send className="mr-3 h-6 w-6" />
                New Campaign
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Contacts", value: "18,430", icon: Users },
              { label: "Messages Sent", value: "68,392", icon: MessageSquare },
              { label: "Delivery Rate", value: "97.8%", icon: TrendingUp },
              { label: "Active Lists", value: lists.length, icon: Globe },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="p-6 text-center border shadow hover:shadow-lg transition-all">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Recipient Lists */}
            <div className="lg:col-span-2">
              <Card className="border shadow-lg overflow-hidden">
                <div className="p-6 border-b bg-muted/30">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Globe className="h-7 w-7 text-primary" />
                    Recipient Lists
                  </h2>
                  <p className="text-muted-foreground mt-1">Select lists and send SMS instantly</p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Search lists..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                    {selectedLists.length > 0 && (
                      <div className="flex gap-3">
                        <Button variant="destructive" size="lg" onClick={() => setSelectedLists([])}>
                          <Trash2 className="mr-2 h-5 w-5" />
                          Delete
                        </Button>
                        <Button size="lg" onClick={handleSendSMS}>
                          <Send className="mr-2 h-5 w-5" />
                          Send SMS ({selectedLists.length})
                        </Button>
                      </div>
                    )}
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox
                            checked={selectedLists.length === lists.length && lists.length > 0}
                            onCheckedChange={(checked) =>
                              setSelectedLists(checked ? lists.map(l => l.id) : [])
                            }
                          />
                        </TableHead>
                        <TableHead>List Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-right">Contacts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLists.map((list) => (
                        <TableRow
                          key={list.id}
                          className="cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => toggleList(list.id)}
                        >
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Checkbox checked={selectedLists.includes(list.id)} onCheckedChange={() => toggleList(list.id)} />
                          </TableCell>
                          <TableCell className="font-medium">{list.name}</TableCell>
                          <TableCell className="text-muted-foreground">{list.location}</TableCell>
                          <TableCell className="text-right font-bold text-lg">
                            {list.count.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>

            {/* Recent Campaigns */}
            <div>
              <Card className="border shadow-lg h-full">
                <div className="p-6 border-b bg-muted/30">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Sparkles className="h-7 w-7 text-primary" />
                    Recent Campaigns
                  </h2>
                </div>
                <div className="p-6 space-y-5">
                  {campaigns.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-lg">{c.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4" />
                            {c.sent}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-base font-bold">
                          {c.delivered}%
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center py-12 border-t">
            <p className="text-3xl font-bold text-primary">BulkEmail</p>
            <p className="text-lg text-muted-foreground mt-2">
              Built in Nepal • For the World • Always Reliable
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}