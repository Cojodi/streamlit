# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/Metric.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1cstreamlit/proto/Metric.proto\"\xee\x01\n\x06Metric\x12\r\n\x05label\x18\x01 \x01(\t\x12\x0c\n\x04\x62ody\x18\x02 \x01(\t\x12\r\n\x05\x64\x65lta\x18\x03 \x01(\t\x12*\n\tdirection\x18\x04 \x01(\x0e\x32\x17.Metric.MetricDirection\x12\"\n\x05\x63olor\x18\x05 \x01(\x0e\x32\x13.Metric.MetricColor\x12\x0c\n\x04help\x18\x06 \x01(\t\"+\n\x0bMetricColor\x12\x07\n\x03RED\x10\x00\x12\t\n\x05GREEN\x10\x01\x12\x08\n\x04GRAY\x10\x02\"-\n\x0fMetricDirection\x12\x08\n\x04\x44OWN\x10\x00\x12\x06\n\x02UP\x10\x01\x12\x08\n\x04NONE\x10\x02\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.Metric_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _METRIC._serialized_start=33
  _METRIC._serialized_end=271
  _METRIC_METRICCOLOR._serialized_start=181
  _METRIC_METRICCOLOR._serialized_end=224
  _METRIC_METRICDIRECTION._serialized_start=226
  _METRIC_METRICDIRECTION._serialized_end=271
# @@protoc_insertion_point(module_scope)
