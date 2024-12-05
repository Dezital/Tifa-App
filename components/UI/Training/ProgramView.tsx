import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SearchBarModule from '../SearchBarModule';
import ProgramModule from './ProgramModule';

interface CourseProps {
  id: string;
  title?: string;
  content?: string;
  desc: string;
  image?: string;
  lock: boolean;
  progress: number;
  videos: Array<VideoProps>;
}

interface VideoProps {
  id: string;
  title: string;
  video: string;
  content: string;
  desc: string;
}

interface ProgramViewProps {
  courses: CourseProps[];
}

const ProgramView: React.FC<ProgramViewProps> = ({ courses }) => {
  const [search, setSearch] = useState("");
  const searchTriggered = () => {
    console.log("search", search);
    setSearch("");
  };

  return (
    <View style={programViewStyles.programViewContainer}>
      <SearchBarModule
        password={search}
        setPassword={setSearch}
        togglePasswordVisibility={searchTriggered}
      />
      {courses && courses.length > 0 && courses.map((course, index) => (
        <ProgramModule key={course.id} course={course} />
      ))}
    </View>
  );
};

export default ProgramView;

const programViewStyles = StyleSheet.create({
  programViewContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
